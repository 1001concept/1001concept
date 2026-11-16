import { ArrowLink, CtaBand, Img, PageHero } from '@/components/ui';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).services;
  return pageMeta({ lang, path: '/services', title: t.kicker, description: t.lead });
}

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const t = dict.services;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />

      <section className="section section--line">
        <div className="wrap">
          {t.items.map((s, i) => (
            <article key={s.key} id={s.key} className="svc">
              <div className="svc__media" data-reveal>
                <Img name={s.image} alt={s.name} ratio="4 / 5" sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className="svc__text" data-reveal style={{ '--d': '0.1s' }}>
                {t.items.length > 1 ? <p className="kicker">{String(i + 1).padStart(2, '0')}</p> : null}
                <h2 className="h2">{s.name}</h2>
                <p>{s.summary}</p>
                <p className="svc__label">{t.suited}</p>
                <p style={{ marginTop: 8 }}>{s.suited}</p>
                <p className="svc__label">{t.deliverables}</p>
                <ul className="ticks">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--raised">
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-reveal>
              {t.extraTitle}
            </h2>
            <ArrowLink href={`/${lang}/process`}>{dict.cta.fullProcess}</ArrowLink>
          </div>
          <div className="cards4">
            {t.extras.map((e, i) => (
              <div key={e.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{e.name}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
