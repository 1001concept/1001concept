import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow, Img } from '@/components/ui';
import { imageAspect, isLandscape } from '@/content/images';
import { getOutsource, outsourceCategories, outsourceProjects, outsourceTitle } from '@/content/outsource';
import { locales } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => outsourceProjects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const p = getOutsource(slug);
  if (!p || !p[lang]) return {};
  const t = p[lang];
  return pageMeta({
    lang,
    path: `/services/rendering/${slug}`,
    title: `${outsourceTitle(p, lang)} · Outsource Design`,
    description: t.text?.[0] || `${outsourceCategories[p.category]?.[lang] || ''} · Outsource Design`,
  });
}

// Ảnh ngang chiếm cả hàng, ảnh dọc đứng hai cái một hàng. Để không hàng nào bị trống một bên,
// mỗi ảnh dọc được kéo ảnh dọc kế tiếp lên đứng cạnh; ảnh dọc lẻ cuối cùng được dời xuống cuối.
function pairPortraits(list) {
  const rest = [...list];
  const out = [];
  let lone = null;
  while (rest.length) {
    const a = rest.shift();
    if (isLandscape(a)) {
      out.push(a);
      continue;
    }
    const j = rest.findIndex((x) => !isLandscape(x));
    if (j === -1) {
      lone = a;
      continue;
    }
    out.push(a, rest.splice(j, 1)[0]);
  }
  return lone ? [...out, lone] : out;
}

// Trang một dự án outsource: tên, thông tin ngắn, rồi toàn bộ ảnh.
export default async function OutsourceProjectPage({ params }) {
  const { lang, slug } = await params;
  const dict = getDict(lang);
  const p = getOutsource(slug);
  if (!p) notFound();

  const l = dict.rendering;
  const t = p[lang];
  const title = outsourceTitle(p, lang);
  const all = pairPortraits([p.cover, ...(p.images || [])]);
  const facts = [
    [l.worksCategory, outsourceCategories[p.category]?.[lang]],
    [l.worksPartner, t.partner],
    [l.worksLocation, t.location],
    [l.worksYear, p.year],
  ].filter(([, v]) => v);

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <p className="kicker" data-reveal>
            <Link href={`/${lang}/services/rendering#works`}>{l.title}</Link>
          </p>
          <h1 className="h1" data-reveal>
            {title}
          </h1>
          <dl className="pj-facts os-facts" data-reveal>
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {(t.text || []).map((para) => (
            <p key={para} className="lead" data-reveal style={{ marginTop: 24 }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="rgrid">
          {all.map((name, i) => (
            <figure key={`${name}-${i}`} className={isLandscape(name) ? 'is-wide' : ''} data-reveal>
              <Img
                name={name}
                alt={`${title} — ${i + 1}`}
                ratio={imageAspect(name)}
                sizes={isLandscape(name) ? '100vw' : '(min-width: 800px) 50vw, 100vw'}
                priority={i === 0}
              />
            </figure>
          ))}
        </div>
        <p style={{ marginTop: 48 }}>
          <Link className="btn" href={`/${lang}/services/rendering#works`}>
            {l.worksBack}
            <Arrow />
          </Link>
        </p>
      </section>
    </>
  );
}
