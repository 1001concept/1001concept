import QuoteForm from '@/components/QuoteForm';
import { PageHero } from '@/components/ui';
import { site } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).contact;
  return pageMeta({ lang, path: '/contact', title: t.kicker, description: t.lead });
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = getDict(lang).contact;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="contact">
          <QuoteForm t={t.form} contact={{ zalo: site.zalo, email: site.email, phoneHref: site.phoneHref }} />
          <aside className="contact__side" aria-labelledby="direct-title">
            <h2 id="direct-title" className="kicker">
              {t.directTitle}
            </h2>
            <dl className="info" style={{ marginTop: 24 }}>
              <div>
                <dt>{t.phone}</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>{t.zalo}</dt>
                <dd>
                  <a href={`https://zalo.me/${site.zalo}`} target="_blank" rel="noopener noreferrer">
                    {t.chatZalo}
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.email}</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>{t.address}</dt>
                <dd>{site.address[lang]}</dd>
              </div>
              <div>
                <dt>{t.hours}</dt>
                <dd>{site.hours[lang]}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
