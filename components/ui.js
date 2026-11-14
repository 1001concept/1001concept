import Link from 'next/link';
import { imageSrc, imageSrcSet } from '@/content/images';

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Img({ name, alt = '', ratio, sizes = '100vw', priority = false, zoom = false, className = '' }) {
  return (
    <span className={`img ${zoom ? 'img--zoom' : ''} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={imageSrc(name, 1600)}
        srcSet={imageSrcSet(name)}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </span>
  );
}

export function ArrowLink({ href, children }) {
  return (
    <Link className="link" href={href}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function PageHero({ kicker, title, lead }) {
  return (
    <section className="phero">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1 className="h1">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
    </section>
  );
}

export function ProjectCard({ project, lang, index, ratio = '4 / 3', sizes, label }) {
  const t = project[lang];
  return (
    <Link className="pcard" href={`/${lang}/projects/${project.slug}`} data-reveal aria-label={`${label}: ${t.title}`}>
      <Img name={project.cover} alt={`${t.title} — ${t.location}`} ratio={ratio} sizes={sizes} zoom />
      <div className="pcard__info">
        <span className="pcard__idx">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="pcard__title">{t.title}</h3>
        <span className="pcard__year">{project.year}</span>
        <span className="pcard__meta">
          {t.location} · {project.area}
        </span>
      </div>
    </Link>
  );
}

export function PostCard({ post, lang, minutesLabel, dateText, ratio = '4 / 3', delay = 0 }) {
  return (
    <Link className="post" href={`/${lang}/journal/${post.slug}`} data-reveal style={{ '--d': `${delay}s` }}>
      <Img name={post.cover} alt="" ratio={ratio} sizes="(min-width: 720px) 33vw, 100vw" zoom />
      <div>
        <p className="post__date">
          <time dateTime={post.date}>{dateText}</time>
          <span>
            {post.minutes} {minutesLabel}
          </span>
        </p>
        <h3 className="post__title">{post.title}</h3>
        <p className="post__excerpt">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export function CtaBand({ lang, dict }) {
  return (
    <section className="section section--line">
      <div className="wrap cta">
        <div data-reveal>
          <p className="kicker">{dict.ctaBand.kicker}</p>
          <h2 className="h1">{dict.ctaBand.title}</h2>
        </div>
        <div className="cta__side" data-reveal style={{ '--d': '0.12s' }}>
          <p className="muted">{dict.ctaBand.text}</p>
          <Link className="btn btn--solid" href={`/${lang}/contact`}>
            {dict.cta.start}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
