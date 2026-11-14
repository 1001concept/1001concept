'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';
import { site } from '@/content/site';

// Cấu trúc menu: mục có `children` là nhóm xổ xuống.
const GROUPS = [
  {
    key: 'about',
    children: [
      { key: 'story', href: '/about' },
      { key: 'process', href: '/process' },
    ],
  },
  {
    key: 'projects',
    children: [
      { key: 'selected', href: '/projects' },
      { key: 'all', href: '/projects#all' },
    ],
  },
  { key: 'services', href: '/services' },
  { key: 'journal', href: '/journal' },
  { key: 'contact', href: '/contact' },
].filter((g) => site.showProjects || g.key !== 'projects');

export default function Header({ lang, nav }) {
  const pathname = usePathname() || `/${lang}`;
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const [theme, setTheme] = useState('light');

  // Đọc giao diện đã lưu (script trong <head> đã gắn data-theme trước khi vẽ trang).
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const applyTheme = (next) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // không lưu được (chế độ riêng tư) — vẫn đổi giao diện cho phiên này
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const rest = pathname.replace(/^\/(vi|en)/, '');
  const base = (href) => href.split('#')[0];
  const isCurrent = (href) => rest.startsWith(base(href));
  const exact = (href) => (!href.includes('#') && isCurrent(href) ? 'page' : undefined);

  // Trang chủ và trang chi tiết dự án mở đầu bằng ảnh/video → chữ header màu sáng.
  const overMedia = rest === '' || /^\/projects\/[^/]+$/.test(rest);
  const light = overMedia && !scrolled && !open;

  return (
    <>
      <header
        className={`header ${light ? 'header--light' : ''} ${scrolled || open ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}
      >
        <div className="wrap header__in">
          <Link className="logo" href={`/${lang}`} aria-label={`${site.name} ${site.suffix}`}>
            <Logo id="logo-header" />
          </Link>

          <nav className="nav" aria-label="Primary">
            {GROUPS.map((g) =>
              g.children ? (
                <div key={g.key} className="nav__item">
                  <button
                    type="button"
                    className={`nav__link ${g.children.some((c) => isCurrent(c.href)) ? 'is-current' : ''}`}
                    aria-haspopup="true"
                  >
                    {nav[g.key]}
                  </button>
                  <div className="sub">
                    {g.children.map((c) => (
                      <Link key={c.key} href={`/${lang}${c.href}`} aria-current={exact(c.href)}>
                        {nav[c.key]}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={g.key} className="nav__item">
                  <Link className="nav__link" href={`/${lang}${g.href}`} aria-current={exact(g.href)}>
                    {nav[g.key]}
                  </Link>
                </div>
              ),
            )}
          </nav>

          <div className="header__side">
            <div className="header__prefs">
              <div className="lang" role="group" aria-label="Language">
                <Link href={`/vi${rest}`} hrefLang="vi" aria-current={lang === 'vi' ? 'true' : undefined} aria-label="Tiếng Việt">
                  VI
                </Link>
                <i aria-hidden="true" />
                <Link href={`/en${rest}`} hrefLang="en" aria-current={lang === 'en' ? 'true' : undefined} aria-label="English">
                  EN
                </Link>
              </div>
              <div className="theme" role="group" aria-label={nav.theme}>
                <button type="button" aria-pressed={theme === 'light'} aria-label={nav.themeLight} onClick={() => applyTheme('light')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2.500v2.500M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300l1.800 1.800M16.900 16.900l1.800 1.800M5.300 18.700l1.800-1.800M16.900 7.100l1.800-1.800" />
                  </svg>
                </button>
                <i aria-hidden="true" />
                <button type="button" aria-pressed={theme === 'dark'} aria-label={nav.themeDark} onClick={() => applyTheme('dark')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 14.500A8.500 8.500 0 0 1 9.500 4a8.500 8.500 0 1 0 10.500 10.500Z" />
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? nav.close : nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu ${open ? 'is-open' : ''}`} inert={!open} data-lenis-prevent>
        <nav className="menu__links" aria-label="Mobile">
          {GROUPS.map((g, i) =>
            g.children ? (
              <div key={g.key} style={{ '--i': i }}>
                <p className="menu__label">{nav[g.key]}</p>
                <div className="menu__sub">
                  {g.children.map((c) => (
                    <Link key={c.key} href={`/${lang}${c.href}`} aria-current={exact(c.href)}>
                      {nav[c.key]}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={g.key} className="menu__top" href={`/${lang}${g.href}`} style={{ '--i': i }} aria-current={exact(g.href)}>
                {nav[g.key]}
              </Link>
            ),
          )}
        </nav>
        <div className="menu__foot">
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  );
}
