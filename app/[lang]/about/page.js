import { CtaBand, Img, PageHero } from '@/components/ui';
import { site } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).about;
  return pageMeta({ lang, path: '/about', title: t.kicker, description: t.lead });
}

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const t = dict.about;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />

      <section className="wrap" data-reveal="fade" data-parallax>
        <Img name="studio" alt={t.studioTitle} ratio="21 / 9" sizes="100vw" priority />
      </section>

      <section className="section">
        <div className="wrap split">
          <div data-reveal>
            <p className="kicker">{t.storyTitle}</p>
            <Img name="drafting" alt="" ratio="4 / 5" sizes="(min-width: 900px) 42vw, 100vw" className="split__img" />
          </div>
          <div className="split__text" data-reveal style={{ '--d': '0.1s' }}>
            {t.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
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
      </section>

      <section className="section section--raised">
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-reveal>
              {t.valuesTitle}
            </h2>
          </div>
          <div className="cards4">
            {t.values.map((v, i) => (
              <div key={v.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
