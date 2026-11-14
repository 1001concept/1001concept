import { notFound } from 'next/navigation';
import { ArrowLink, CtaBand, Img, PostCard } from '@/components/ui';
import { locales } from '@/content/site';
import { getDict } from '@/lib/dict';
import { formatDate, getPost, getPosts } from '@/lib/journal';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => getPosts(lang).map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = getPost(lang, slug);
  if (!post) return {};
  return pageMeta({ lang, path: `/journal/${slug}`, title: post.title, description: post.excerpt });
}

export default async function ArticlePage({ params }) {
  const { lang, slug } = await params;
  const post = getPost(lang, slug);
  if (!post) notFound();

  const dict = getDict(lang);
  const t = dict.journal;
  const others = getPosts(lang)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="wrap article__head">
          <p className="kicker">{t.kicker}</p>
          <h1 className="h1">{post.title}</h1>
          <p className="post__date">
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
            <span>
              {post.minutes} {t.minutes}
            </span>
          </p>
        </header>
        <div className="wrap article__cover" data-reveal="fade" data-parallax>
          <Img name={post.cover} alt="" ratio="21 / 9" sizes="100vw" priority />
        </div>
        <div className="wrap">
          <div className="article prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      {others.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="shead">
              <h2 className="h2" data-reveal>
                {t.more}
              </h2>
              <ArrowLink href={`/${lang}/journal`}>{dict.cta.allPosts}</ArrowLink>
            </div>
            <div className="posts">
              {others.map((p, i) => (
                <PostCard
                  key={p.slug}
                  post={p}
                  lang={lang}
                  minutesLabel={t.minutes}
                  dateText={formatDate(p.date, lang)}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
