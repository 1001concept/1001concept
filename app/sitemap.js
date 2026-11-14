import { projects } from '@/content/projects';
import { locales, site } from '@/content/site';
import { getPosts } from '@/lib/journal';

const PAGES = ['', '/projects', '/services', '/process', '/about', '/journal', '/contact'];

export default function sitemap() {
  const paths = [
    ...PAGES,
    ...projects.map((p) => `/projects/${p.slug}`),
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
