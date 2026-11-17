import { outsourceProjects } from '@/content/outsource';
import { projects } from '@/content/projects';
import { locales, site } from '@/content/site';
import { getPosts } from '@/lib/journal';

const PAGES = ['', '/projects', '/services', '/services/rendering', '/process', '/about', '/journal', '/contact'].filter(
  (path) => site.showProjects || path !== '/projects',
);

export default function sitemap() {
  const paths = [
    ...PAGES,
    ...(site.showProjects ? projects.map((p) => `/projects/${p.slug}`) : []),
    ...outsourceProjects.map((p) => `/services/rendering/${p.slug}`),
    ...getPosts('vi').map((p) => `/journal/${p.slug}`),
  ];
  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${site.url}/${lang}${path}`,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
