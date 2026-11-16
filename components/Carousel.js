'use client';

import { useRef } from 'react';

// Dải ảnh trượt ngang: vuốt trên điện thoại, hoặc bấm hai nút mũi tên.
export default function Carousel({ children, labels, className = '' }) {
  const track = useRef(null);

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const item = el.firstElementChild;
    const step = item ? item.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__track" ref={track} tabIndex={0} data-lenis-prevent-touch>
        {children}
      </div>
      <div className="carousel__nav">
        <button type="button" aria-label={labels.prev} onClick={() => move(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M20 12H4M10 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" aria-label={labels.next} onClick={() => move(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
