import Link from 'next/link';
import { Arrow, Img, PageHero } from '@/components/ui';
import { images, isLandscape } from '@/content/images';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).rendering;
  return pageMeta({ lang, path: '/services/rendering', title: t.title, description: t.lead });
}

// Dịch vụ B2B: Outsource Design cho doanh nghiệp cùng ngành.
export default async function RenderingPage({ params }) {
  const { lang } = await params;
  const t = getDict(lang).rendering;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />

      <section className="wrap" data-reveal="fade" data-parallax>
        <Img name="renderHero" alt="" ratio="21 / 9" sizes="100vw" priority />
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <div data-reveal>
              <h2 className="h2">{t.forTitle}</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                {t.forLead}
              </p>
            </div>
          </div>
          <div className="cards4 cards4--three">
            {t.forList.map((item, i) => (
              <div key={item.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="wrap story__grid" style={{ marginTop: 0 }}>
          <h2 className="story__label" data-reveal>
            {t.workTitle}
          </h2>
          <ul className="ticks" data-reveal style={{ '--d': '0.1s', marginTop: 0 }}>
            {t.workList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <h2 className="h2" data-reveal>
              {t.stepsTitle}
            </h2>
          </div>
          <ol className="steps steps--four">
            {t.steps.map((s, i) => (
              <li key={s.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--line">
        <div className="wrap">
          <h2 className="subhead" data-reveal>
            {t.galleryTitle}
          </h2>
          <div className="rgrid">
            {images.renderGallery.map((name, i) => (
              <figure
                key={name}
                className={isLandscape(name) ? 'is-wide' : ''}
                data-reveal
                style={{ '--d': `${(i % 2) * 0.1}s` }}
              >
                <Img
                  name={name}
                  alt=""
                  ratio={isLandscape(name) ? '3 / 2' : '3 / 4'}
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--line">
        <div className="wrap cta">
          <div data-reveal>
            <p className="kicker">B2B</p>
            <h2 className="h1">{t.ctaTitle}</h2>
          </div>
          <div className="cta__side" data-reveal style={{ '--d': '0.12s' }}>
            <p className="muted">{t.ctaText}</p>
            <Link className="btn btn--solid" href={`/${lang}/contact`}>
              {t.cta}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
