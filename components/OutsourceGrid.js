'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Img } from '@/components/ui';

// Lưới dự án outsource, lọc theo hạng mục (Căn hộ / Nhà phố / Villa / Dự án).
export default function OutsourceGrid({ projects, categories, tabs: tabNames, lang, labels }) {
  const [active, setActive] = useState('all');
  // "Tất cả": xếp theo thứ tự hạng mục (Căn hộ → Nhà phố → Villa → …), rồi theo số thứ tự.
  const order = Object.keys(categories);
  const sorted = [...projects].sort(
    (a, b) => order.indexOf(a.category) - order.indexOf(b.category) || a.number.localeCompare(b.number),
  );
  const shown = active === 'all' ? sorted : sorted.filter((p) => p.category === active);

  // Thẻ mới hiện ra sau khi lọc cần được đánh dấu là đã hiển thị.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    document.querySelectorAll('.ogrid [data-reveal]').forEach((el) => el.classList.add('is-in'));
  }, [active]);

  const tabs = ['all', ...Object.keys(categories)];

  return (
    <>
      <div className="filter" role="group" aria-label={labels.filter}>
        {tabs.map((key) => (
          <button key={key} type="button" aria-pressed={active === key} onClick={() => setActive(key)}>
            {key === 'all' ? labels.all : (tabNames || categories)[key][lang]}
          </button>
        ))}
        <span className="filter__count" aria-live="polite">
          {String(shown.length).padStart(2, '0')} {labels.count}
        </span>
      </div>

      {shown.length > 0 ? (
        <div className="ogrid">
          {shown.map((p) => {
            const t = p[lang];
            const name = categories[p.category]?.[lang];
            return (
              <Link key={p.slug} className="pcard" href={`/${lang}/services/rendering/${p.slug}`} data-reveal>
                <Img name={p.cover} alt={`${name} ${p.number}`} ratio="4 / 5" sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" zoom />
                <div className="pcard__info">
                  <span className="pcard__idx">{p.number}</span>
                  <h3 className="pcard__title">{name}</h3>
                  <span className="pcard__year">{p.year}</span>
                  {t.location ? <span className="pcard__meta">{t.location}</span> : null}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="muted ogrid__empty">{labels.empty}</p>
      )}
    </>
  );
}
