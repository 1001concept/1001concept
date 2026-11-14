import { CtaBand, PageHero, PostCard } from '@/components/ui';
import { getDict } from '@/lib/dict';
import { formatDate, getPosts } from '@/lib/journal';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).journal;
  return pageMeta({ lang, path: '/journal', title: t.kicker, description: t.lead });
}

export default async function JournalPage({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const t = dict.journal;
  const posts = getPosts(lang);

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="posts posts--feature">
          {posts.map((post, i) => (
            <PostCard
              key={post.slug}
              post={post}
              lang={lang}
              minutesLabel={t.minutes}
              dateText={formatDate(post.date, lang)}
              ratio={i === 0 ? '16 / 10' : '4 / 3'}
            />
          ))}
        </div>
      </section>
      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
