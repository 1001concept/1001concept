// ─────────────────────────────────────────────────────────────
// THÔNG TIN THƯƠNG HIỆU — sửa tại đây, toàn bộ website cập nhật theo.
// Thông tin liên hệ là dữ liệu thật của công ty.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: '1001CONCEPT',
  suffix: 'VIETNAM',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://1001concept.com',

  // Bật/tắt toàn bộ phần Dự án (menu, mục trên trang chủ, trang /projects).
  // Đang TẮT cho đến khi có ảnh và thông tin công trình thật. Đổi thành true để bật lại.
  showProjects: true,

  // Video mở đầu trang chủ. Chép file vào /public/video rồi điền đường dẫn,
  // ví dụ '/video/hero.mp4'. Để trống thì trang chủ dùng ảnh `hero`.
  heroVideo: '/video/hero.mp4',

  // Liên hệ
  phone: '+84 77 504 8557',
  phoneHref: '+84775048557',
  zalo: '84775048557', // số Zalo, viết liền, có mã quốc gia
  messenger: '1001conceptvn', // username trang Facebook
  email: 'info@1001concept.com',

  address: {
    vi: '600 Nguyễn Lương Bằng, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam',
    en: '600 Nguyen Luong Bang Street, Tan My Ward, Ho Chi Minh City, Vietnam',
  },
  postalCode: '700000',
  city: {
    vi: 'TP. Hồ Chí Minh, Việt Nam',
    en: 'Ho Chi Minh City, Vietnam',
  },
  // Mỗi phần tử là một dòng
  hours: {
    vi: ['Thứ Hai – Thứ Sáu: 08:30 – 17:30', 'Thứ Bảy: theo lịch hẹn', 'Chủ nhật: nghỉ'],
    en: ['Monday – Friday: 08:30 – 17:30', 'Saturday: by appointment', 'Sunday: closed'],
  },

  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/1001conceptvn' },
    { label: 'Instagram', href: 'https://www.instagram.com/1001concept/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@1001concept.interior' },
  ],

  // Con số nổi bật (số công trình, số năm…). Để trống thì website không hiện mục này.
  // Ví dụ: { value: '120+', vi: 'Công trình hoàn thiện', en: 'Completed projects' }
  stats: [],
};

export const locales = ['vi', 'en'];
export const defaultLocale = 'vi';
