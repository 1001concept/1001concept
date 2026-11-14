import { CtaBand, PageHero } from '@/components/ui';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).process;
  return pageMeta({ lang, path: '/process', title: t.kicker, description: t.lead });
}

export default async function ProcessPage({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const t = dict.process;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <ol className="timeline">
          {t.steps.map((s, i) => (
            <li key={s.name} data-reveal>
              <span className="timeline__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2>{s.name}</h2>
                <p>{s.text}</p>
              </div>
              <dl>
                <div>
                  <dt>{t.duration}</dt>
                  <dd>{s.time}</dd>
                </div>
                <div>
                  <dt>{t.output}</dt>
                  <dd>{s.output}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--raised">
        <div className="wrap faq">
          <h2 className="h2" data-reveal>
            {t.faqTitle}
          </h2>
          <div data-reveal style={{ '--d': '0.1s' }}>
            {t.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
