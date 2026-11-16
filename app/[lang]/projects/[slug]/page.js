import Link from 'next/link';
import { notFound } from 'next/navigation';
import Carousel from '@/components/Carousel';
import { CtaBand, Img } from '@/components/ui';
import { imageAspect, isLandscape } from '@/content/images';
import { getProject, projects } from '@/content/projects';
import { locales, site } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  if (!site.showProjects) return [];
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !project[lang]) return {};
  const t = project[lang];
  return pageMeta({ lang, path: `/projects/${slug}`, title: t.title, description: t.tagline || t.intro?.[0] });
}

// Ba kiểu bố cục chương, tự luân phiên theo thứ tự chương.
const LAYOUTS = ['feature', 'pair', 'slider'];

function ChapterText({ t, big }) {
  return (
    <>
      <h2 className={big ? 'pj-ch__title pj-ch__title--big' : 'pj-ch__title'}>{t.title}</h2>
      {t.zone || t.text?.length ? (
        <div className="pj-ch__copy">
          {t.zone ? <p className="pj-ch__zone">/ {t.zone} /</p> : null}
          {(t.text || []).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      ) : null}
    </>
  );
}

function Slides({ images, alt, labels }) {
  return (
    <Carousel labels={labels}>
      {images.map((name, i) => (
        <figure key={`${name}-${i}`} className="carousel__item" style={{ aspectRatio: imageAspect(name) }}>
          <Img name={name} alt={`${alt} — ${i + 1}`} sizes="(min-width: 900px) 50vw, 88vw" />
        </figure>
      ))}
    </Carousel>
  );
}

export default async function ProjectPage({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  const dict = getDict(lang);
  if (!project || !site.showProjects) notFound();

  const l = dict.projects;
  const t = project[lang];
  const index = projects.indexOf(project);
  const prev = projects.length > 2 ? projects[(index - 1 + projects.length) % projects.length] : null;
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  const related = projects.filter((p) => p !== project).slice(0, 3);
  const slideLabels = { prev: l.prevImage, next: l.nextImage };

  const facts = [
    [l.location, t.location],
    [l.client, t.client],
    [l.type, t.type],
    [l.area, project.area],
    [l.year, project.year],
  ].filter(([, value]) => value);

  return (
    <>
      {/* 1. Mở đầu */}
      <section className="pj-intro">
        <div className="pj-intro__text">
          <p className="kicker">{dict.nav.projects}</p>
          <h1 className="pj-title">{t.title}</h1>
          {t.tagline ? <p className="pj-tagline">{t.tagline}</p> : null}
          {(t.intro || []).map((p) => (
            <p key={p} className="pj-intro__p">
              {p}
            </p>
          ))}
        </div>
        <div className="pj-intro__media">
          <Img name={project.cover} alt={t.title} priority sizes="(min-width: 900px) 55vw, 100vw" />
        </div>
      </section>

      {/* 2. Ảnh rộng */}
      {project.wide ? (
        <section className="pj-wide" data-reveal="fade" data-parallax>
          <Img name={project.wide} alt={`${t.title} — ${t.location}`} ratio="21 / 9" sizes="100vw" />
        </section>
      ) : null}

      {/* 3. Tổng quan */}
      <section className="section">
        <div className="wrap">
          {t.statement ? (
            <p className="pj-statement" data-reveal>
              {t.statement}
            </p>
          ) : null}
          <div className="pj-body">
            <div className="pj-body__stack">
              {(project.gallery || []).map((name, i) => (
                <figure key={`${name}-${i}`} data-reveal>
                  <Img name={name} alt={`${t.title} — ${i + 1}`} sizes="(min-width: 900px) 58vw, 100vw" />
                </figure>
              ))}
            </div>
            <aside className="pj-body__side" data-reveal>
              {t.tagline ? <p className="pj-body__tag">{t.tagline}</p> : null}
              <p className="pj-body__name">{t.title}</p>
              <dl className="pj-facts">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                {t.scope?.length ? (
                  <div>
                    <dt>{l.scope}</dt>
                    <dd>
                      {t.scope.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Các chương */}
      {(project.chapters || []).map((chapter, i) => {
        const c = chapter[lang];
        const layout = LAYOUTS[i % LAYOUTS.length];
        const images = chapter.images || [];
        const used = layout === 'feature' ? 1 : layout === 'pair' ? 2 : images.length;
        const extra = images.slice(used);

        return (
          <section key={c.title} className={`pj-ch pj-ch--${layout}`}>
            {layout === 'feature' && (
              <div className="pj-ch__grid">
                {images[0] ? (
                  <div className="pj-ch__media" data-reveal>
                    <Img
                      name={images[0]}
                      alt={`${t.title} — ${c.zone || c.title}`}
                      ratio="4 / 5"
                      sizes="(min-width: 900px) 50vw, 100vw"
                    />
                  </div>
                ) : null}
                <div className="pj-ch__text" data-reveal style={{ '--d': '0.1s' }}>
                  <ChapterText t={c} big />
                </div>
              </div>
            )}

            {layout === 'pair' && (
              <div className="wrap pj-ch__grid">
                <div className="pj-ch__text" data-reveal>
                  <ChapterText t={c} />
                </div>
                <div className={`pj-ch__pair ${images.slice(0, 2).every(isLandscape) ? 'pj-ch__pair--stack' : ''}`}>
                  {images.slice(0, 2).map((name, n) => (
                    <figure key={`${name}-${n}`} data-reveal style={{ '--d': `${n * 0.12}s` }}>
                      <Img
                        name={name}
                        alt={`${t.title} — ${c.zone || c.title} ${n + 1}`}
                        ratio={isLandscape(name) ? '3 / 2' : '3 / 4'}
                        sizes="(min-width: 900px) 32vw, 100vw"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {layout === 'slider' && (
              <div className="pj-ch__grid">
                <div className="pj-ch__text" data-reveal>
                  <ChapterText t={c} />
                </div>
                <div className="pj-ch__slides" data-reveal style={{ '--d': '0.1s' }}>
                  <Slides images={images} alt={`${t.title} — ${c.zone || c.title}`} labels={slideLabels} />
                </div>
              </div>
            )}

            {extra.length > 0 && (
              <div className="pj-ch__extra" data-reveal>
                <Slides images={extra} alt={`${t.title} — ${c.zone || c.title}`} labels={slideLabels} />
              </div>
            )}
          </section>
        );
      })}

      {/* 5. Dự án trước / sau, dự án khác */}
      {next ? (
        <nav className="wrap pj-nav" aria-label={l.kicker}>
          {prev ? (
            <Link href={`/${lang}/projects/${prev.slug}`}>
              <small>{l.prev}</small>
              <span>{prev[lang].title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link href={`/${lang}/projects/${next.slug}`}>
            <small>{l.next}</small>
            <span>{next[lang].title}</span>
          </Link>
        </nav>
      ) : null}

      {related.length > 0 ? (
        <section className="section section--line">
          <div className="wrap">
            <h2 className="subhead">{l.related}</h2>
            <div className="pj-related">
              {related.map((p) => (
                <Link key={p.slug} href={`/${lang}/projects/${p.slug}`} data-reveal>
                  <Img name={p.cover} alt="" ratio="4 / 3" sizes="(min-width: 720px) 33vw, 100vw" zoom />
                  <span>{p[lang].title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
