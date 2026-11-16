import { CtaBand, Img, PageHero } from '@/components/ui';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).about;
  return pageMeta({ lang, path: '/about', title: t.kicker, description: t.lead });
}

// Một khối nội dung: tiêu đề bên trái, câu dẫn lớn và các đoạn văn bên phải.
// `image` (tùy chọn) là ảnh dọc đặt dưới tiêu đề để khối chữ không đơn điệu.
function Block({ title, lead, paragraphs, image, children }) {
  return (
    <div className={image ? 'wrap story__grid story__grid--img' : 'wrap story__grid'} style={{ marginTop: 0 }}>
      <h2 className="story__label" data-reveal>
        {title}
      </h2>
      {image ? (
        <div className="story__side" data-reveal data-parallax>
          <Img name={image} alt="" ratio="4 / 5" sizes="(min-width: 900px) 30vw, 100vw" />
        </div>
      ) : null}
      <div className="story__text" data-reveal style={{ '--d': '0.1s' }}>
        {lead ? <p className="story__lead">{lead}</p> : null}
        {paragraphs.map((p, i) => (
          <p key={p} className="story__body" style={!lead && i === 0 ? { marginTop: 0 } : undefined}>
            {p}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
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
        <Block title={t.aboutTitle} paragraphs={t.about} />
      </section>

      <section className="section section--raised">
        <Block title={t.philosophyTitle} lead={t.philosophyLead} paragraphs={t.philosophy} image="philosophySide" />
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div data-reveal data-parallax>
            <Img name="aboutPortrait" alt="" ratio="4 / 5" sizes="(min-width: 900px) 42vw, 100vw" />
          </div>
          <div data-reveal style={{ '--d': '0.1s' }}>
            <h2 className="story__label">{t.approachTitle}</h2>
            <p className="story__lead" style={{ marginTop: 28 }}>
              {t.approachLead}
            </p>
            {t.approach.map((p) => (
              <p key={p} className="story__body">
                {p}
              </p>
            ))}
            <p className="kicker" style={{ marginTop: 40 }}>
              {t.slogan}
            </p>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
