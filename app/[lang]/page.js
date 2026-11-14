import Link from 'next/link';
import HeroVideo from '@/components/HeroMedia';
import { Arrow, ArrowLink, CtaBand, Img, PostCard, ProjectCard } from '@/components/ui';
import { imageSrc } from '@/content/images';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { getDict } from '@/lib/dict';
import { formatDate, getPosts } from '@/lib/journal';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  return { ...pageMeta({ lang, description: dict.meta.description }), title: { absolute: dict.meta.title } };
}

const RATIOS = ['4 / 3', '3 / 4', '4 / 5', '3 / 2'];

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const h = dict.home;
  const featured = projects.slice(0, 4);
  const posts = getPosts(lang).slice(0, 3);
  const services = [...dict.services.items.map((s) => ({ name: s.name, text: s.summary })), ...dict.services.extras];

  return (
    <>
      <section className="banner">
        <div className="banner__media">
          {site.heroVideo ? (
            <HeroVideo src={site.heroVideo} poster={imageSrc('hero', 1600)} />
          ) : (
            <Img name="hero" alt="" priority sizes="100vw" />
          )}
        </div>
        <div className="wrap banner__foot">
          <p className="banner__tag">{h.eyebrow}</p>
        </div>
        <a className="banner__down" href="#story" aria-label={h.scroll}>
          <svg viewBox="0 0 20 44" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M10 0v42M2 34l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <section id="story" className="section story">
        <div className="wrap">
          <h1 className="story__title" data-reveal>
            {h.title[0]} {h.title[1]}
            <span>
              {h.title[2]} {h.title[3]}
            </span>
          </h1>
          <div className="story__media" data-reveal data-parallax>
            <Img name="story" alt="" ratio="21 / 9" sizes="100vw" />
          </div>
          <div className="story__grid">
            <h2 className="story__label" data-reveal>
              {h.storyLabel}
            </h2>
            <div data-reveal style={{ '--d': '0.1s' }}>
              <p className="story__lead">{h.intro}</p>
              <p className="story__body">{h.introBody}</p>
              <p className="story__body">{h.lead}</p>
              <div className="story__actions">
                <Link className="btn btn--solid" href={`/${lang}/about`}>
                  {dict.nav.story}
                  <Arrow />
                </Link>
                <Link className="btn" href={`/${lang}/contact`}>
                  {dict.cta.quote}
                </Link>
              </div>
              <dl className="stats">
                {site.stats.map((s) => (
                  <div key={s.value}>
                    <dt>{s.value}</dt>
                    <dd>{s[lang]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="wrap svch">
          <div className="svch__side" data-reveal>
            <p className="kicker">{h.servicesKicker}</p>
            <h2 className="h2">{h.servicesTitle}</h2>
            <ArrowLink href={`/${lang}/services`}>{dict.cta.allServices}</ArrowLink>
            <span data-parallax>
              <Img name="servicesSide" alt="" ratio="4 / 5" sizes="(min-width: 1000px) 30vw, 100vw" />
            </span>
          </div>
          <ol className="slist">
            {services.map((s, i) => (
              <li key={s.name} data-reveal style={{ '--d': `${i * 0.05}s` }}>
                <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {site.showProjects && (
        <section id="work" className="section">
          <div className="wrap">
            <div className="shead">
              <div data-reveal>
                <p className="kicker">{h.workKicker}</p>
                <h2 className="h2">{h.workTitle}</h2>
              </div>
              <ArrowLink href={`/${lang}/projects#all`}>{dict.cta.allProjects}</ArrowLink>
            </div>
            <div className="work">
              {featured.map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  lang={lang}
                  index={i}
                  ratio={RATIOS[i % 4]}
                  sizes="(min-width: 800px) 58vw, 100vw"
                  label={dict.cta.viewProject}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--line">
        <div className="wrap">
          <div className="shead">
            <div data-reveal>
              <p className="kicker">{h.processKicker}</p>
              <h2 className="h2">{h.processTitle}</h2>
            </div>
            <ArrowLink href={`/${lang}/process`}>{dict.cta.fullProcess}</ArrowLink>
          </div>
          <ol className="steps">
            {dict.process.steps.map((s, i) => (
              <li key={s.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="quote">
        <span data-parallax className="quote__media">
          <Img name="quote" alt="" sizes="100vw" />
        </span>
        <div className="wrap" data-reveal>
          <blockquote>{h.quote}</blockquote>
          <cite>{h.quoteBy}</cite>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="shead">
              <div data-reveal>
                <p className="kicker">{h.journalKicker}</p>
                <h2 className="h2">{h.journalTitle}</h2>
              </div>
              <ArrowLink href={`/${lang}/journal`}>{dict.cta.allPosts}</ArrowLink>
            </div>
            <div className="posts">
              {posts.map((post, i) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  lang={lang}
                  minutesLabel={dict.journal.minutes}
                  dateText={formatDate(post.date, lang)}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
