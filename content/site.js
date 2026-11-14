// ─────────────────────────────────────────────────────────────
// THÔNG TIN THƯƠNG HIỆU — sửa tại đây, toàn bộ website cập nhật theo.
// Các giá trị bên dưới là DỮ LIỆU MẪU, hãy thay bằng thông tin thật.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: '1001CONCEPT',
  suffix: 'VIETNAM',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // Video mở đầu trang chủ. Chép file vào /public/video rồi điền đường dẫn,
  // ví dụ '/video/hero.mp4'. Để trống thì trang chủ dùng ảnh `hero`.
  heroVideo: '/video/hero.mp4',

  // Liên hệ (MẪU — thay bằng số thật)
  phone: '0900 000 000',
  phoneHref: '+84900000000',
  zalo: '0900000000', // số Zalo, viết liền
  messenger: '1001concept', // username trang Facebook
  email: 'hello@1001concept.vn',

  address: {
    vi: 'Quận 1, Thành phố Hồ Chí Minh',
    en: 'District 1, Ho Chi Minh City',
  },
  hours: {
    vi: 'Thứ Hai – Thứ Bảy, 8:30 – 18:00',
    en: 'Monday – Saturday, 8:30 – 18:00',
  },

  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],

  // Con số nổi bật (MẪU)
  stats: [
    { value: '120+', vi: 'Công trình hoàn thiện', en: 'Completed projects' },
    { value: '09', vi: 'Năm thực hành', en: 'Years of practice' },
    { value: '14', vi: 'Tỉnh thành', en: 'Provinces' },
  ],
};

export const locales = ['vi', 'en'];
export const defaultLocale = 'vi';
