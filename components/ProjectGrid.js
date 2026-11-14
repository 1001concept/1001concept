'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from '@/components/ui';

export default function ProjectGrid({ projects, categories, lang, labels }) {
  const [active, setActive] = useState('all');
  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active);

  // Thẻ mới hiện ra sau khi lọc cần được đánh dấu là đã hiển thị.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    document.querySelectorAll('.pgrid [data-reveal]').forEach((el) => el.classList.add('is-in'));
  }, [active]);

  return (
    <>
      <div className="filter" role="group" aria-label={labels.filter}>
        {Object.keys(categories).map((key) => (
          <button key={key} type="button" aria-pressed={active === key} onClick={() => setActive(key)}>
            {categories[key][lang]}
          </button>
        ))}
        <span className="filter__count" aria-live="polite">
          {String(shown.length).padStart(2, '0')} {labels.count}
        </span>
      </div>
      <div className="pgrid">
        {shown.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            lang={lang}
            index={i}
            ratio={i % 3 === 0 ? '4 / 5' : '4 / 3'}
            sizes="(min-width: 800px) 50vw, 100vw"
            label={labels.view}
          />
        ))}
      </div>
    </>
  );
}
