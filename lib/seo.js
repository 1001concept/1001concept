// Tạo metadata cho từng trang, kèm liên kết phiên bản ngôn ngữ còn lại.
export function pageMeta({ lang, path = '', title, description }) {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { vi: `/vi${path}`, en: `/en${path}`, 'x-default': `/vi${path}` },
    },
    openGraph: { title, description, url: `/${lang}${path}` },
  };
}
