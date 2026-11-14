import { notFound } from 'next/navigation';
import ProjectGrid from '@/components/ProjectGrid';
import { CtaBand, PageHero, ProjectCard } from '@/components/ui';
import { categories, projects } from '@/content/projects';
import { site } from '@/content/site';
import { getDict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang).projects;
  return pageMeta({ lang, path: '/projects', title: t.kicker, description: t.lead });
}

export default async function ProjectsPage({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  if (!site.showProjects) notFound();
  const t = dict.projects;
  const featured = projects.slice(0, 2);

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />

      <section className="wrap" aria-labelledby="selected-title">
        <h2 id="selected-title" className="subhead">
          {t.selected}
        </h2>
        <div className="feat">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              lang={lang}
              index={i}
              ratio={i === 0 ? '16 / 10' : '4 / 5'}
              sizes="(min-width: 800px) 58vw, 100vw"
              label={dict.cta.viewProject}
            />
          ))}
        </div>
      </section>

      <section id="all" className="section" aria-labelledby="all-title">
        <div className="wrap">
          <h2 id="all-title" className="subhead">
            {t.all}
          </h2>
          <ProjectGrid
            projects={projects}
            categories={categories}
            lang={lang}
            labels={{ filter: t.filter, count: t.count, view: dict.cta.viewProject }}
          />
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
