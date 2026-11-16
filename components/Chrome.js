import Link from 'next/link';
import Logo from '@/components/Logo';
import { site } from '@/content/site';

const ITEMS = ['projects', 'services', 'process', 'about', 'journal', 'contact'].filter(
  (key) => site.showProjects || key !== 'projects',
);

export function Footer({ lang, dict }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="logo" href={`/${lang}`} aria-label={`${site.name} ${site.suffix}`}>
              <Logo id="logo-footer" />
            </Link>
            <p>{dict.footer.tagline}</p>
          </div>
          <nav aria-label={dict.footer.explore}>
            <h2>{dict.footer.explore}</h2>
            <ul>
              {ITEMS.map((key) => (
                <li key={key}>
                  <Link href={`/${lang}/${key}`}>{dict.nav[key]}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>{dict.footer.contact}</h2>
            <ul>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>{site.address[lang]}</span>
              </li>
              <li>
                <span style={{ display: 'block', paddingBlock: 8 }}>
                  {site.hours[lang].map((line) => (
                    <span key={line} style={{ display: 'block', minHeight: 0 }}>
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2>{dict.footer.follow}</h2>
            <ul>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">
          <Logo id="logo-footer-big" />
        </div>
        <div className="footer__base">
          <span>
            © {new Date().getFullYear()} {site.name} {site.suffix}. {dict.footer.rights}
          </span>
          <span>{site.city[lang]}</span>
        </div>
      </div>
    </footer>
  );
}

export function ContactDock({ dict }) {
  return (
    <div className="dock">
      <a
        className="dock__zalo"
        href={`https://zalo.me/${site.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.dock.zalo}
      >
        Zalo
      </a>
      <a
        href={`https://m.me/${site.messenger}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.dock.messenger}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path
            d="M12 3.5c-4.9 0-8.5 3.5-8.5 8 0 2.4 1 4.5 2.700 6v3l2.900-1.600c.9.3 1.900.4 2.900.4 4.900 0 8.500-3.500 8.500-7.800s-3.600-8-8.500-8Z"
            strokeLinejoin="round"
          />
          <path d="m7.500 13.500 3-3.200 2.700 2.200 3.300-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="dock__label" aria-hidden="true">
          Messenger
        </span>
      </a>
      <a href={`tel:${site.phoneHref}`} aria-label={dict.dock.phone}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path
            d="M6.500 3.500h3l1.500 4-2 1.500a11 11 0 0 0 6 6l1.500-2 4 1.500v3a2 2 0 0 1-2.200 2A16.500 16.500 0 0 1 4.500 5.700a2 2 0 0 1 2-2.200Z"
            strokeLinejoin="round"
          />
        </svg>
        <span className="dock__label" aria-hidden="true">
          {dict.dock.call}
        </span>
      </a>
    </div>
  );
}
