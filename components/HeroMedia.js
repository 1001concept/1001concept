'use client';

import { useEffect, useRef } from 'react';

// Video mở đầu trang chủ: tự phát, tắt tiếng, lặp lại.
// Dừng lại nếu người dùng bật "giảm chuyển động".
export default function HeroVideo({ src, poster }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }
  }, []);

  return <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />;
}
