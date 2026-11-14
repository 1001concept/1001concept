import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand, Img } from '@/components/ui';
import { categories, getProject, projects } from '@/content/projects';
import { locales } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !project[lang]) return {};
  const t = project[lang];
  return pageMeta({ lang, path: `/projects/${slug}`, title: t.title, description: t.summary });
}

export default async function ProjectPage({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  const dict = getDict(lang);
  if (!project) notFound();

  const l = dict.projects;
  const t = project[lang];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <section className="pd-hero">
        <Img name={project.cover} alt={`${t.title} — ${t.location}`} priority sizes="100vw" />
        <div className="wrap pd-hero__in">
          <p className="kicker">{categories[project.category][lang]}</p>
          <h1 className="display">{t.title}</h1>
        </div>
      </section>

      <section className="wrap">
        <dl className="facts" data-reveal>
          <div>
            <dt>{l.location}</dt>
            <dd>{t.location}</dd>
          </div>
          <div>
            <dt>{l.year}</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>{l.area}</dt>
            <dd>{project.area}</dd>
          </div>
          <div>
            <dt>{l.scope}</dt>
            <dd>{t.scope}</dd>
          </div>
        </dl>
      </section>

      <section className="section">
        <div className="wrap pd-text">
          <p className="pd-text__summary" data-reveal>
            {t.summary}
          </p>
          <div className="pd-text__body" data-reveal style={{ '--d': '0.1s' }}>
            {t.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="gallery">
          {project.gallery.map((name, i) => (
            <figure key={name} data-reveal>
              <Img
                name={name}
                alt={`${t.title} — ${i + 1}`}
                ratio={i % 3 === 0 ? '16 / 9' : '4 / 5'}
                sizes={i % 3 === 0 ? '100vw' : '(min-width: 720px) 50vw, 100vw'}
              />
            </figure>
          ))}
        </div>
      </section>

      <Link className="next" href={`/${lang}/projects/${next.slug}`}>
        <Img name={next.cover} alt="" sizes="100vw" zoom />
        <div className="wrap">
          <p className="kicker">{l.next}</p>
          <p className="display">{next[lang].title}</p>
        </div>
      </Link>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
