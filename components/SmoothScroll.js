'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Cuộn mượt (Lenis) + ảnh trượt chậm theo cuộn cho các phần tử [data-parallax].
// Tự tắt khi người dùng bật "giảm chuyển động" trong hệ điều hành.
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({ lerp: 0.1, anchors: true, allowNestedScroll: true });
    lenisRef.current = lenis;

    let items = [];
    const collect = () => {
      items = Array.from(document.querySelectorAll('[data-parallax]'));
    };
    const update = () => {
      const vh = window.innerHeight;
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.setProperty('--py', `${(-progress * r.height * 0.08).toFixed(1)}px`);
      });
    };

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      update();
      frame = requestAnimationFrame(raf);
    };
    collect();
    frame = requestAnimationFrame(raf);

    const observer = new MutationObserver(collect);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Sang trang mới thì về đầu trang ngay, không trượt.
  useEffect(() => {
    if (!window.location.hash) lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
