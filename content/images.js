// ─────────────────────────────────────────────────────────────
// KHO ẢNH — toàn bộ là ảnh công trình của 1001CONCEPT.
//
// Thêm / đổi ảnh:
//   1. Chép file gốc (.jpg/.png) vào  assets/originals/
//   2. Chạy  npm run images   (tạo bản WebP nhẹ trong public/images)
//   3. Gán tên file (không đuôi) cho vị trí cần dùng ở bảng `images` bên dưới
// ─────────────────────────────────────────────────────────────
import manifest from './images.manifest.json';

export const images = {
  // Trang chủ
  hero: 'wine-lounge', // ảnh chờ của banner trước khi video tải xong
  story: 'quilux', // ảnh ngang lớn ở phần Câu chuyện
  servicesSide: 'wine-cabinet', // ảnh dọc cạnh danh sách Dịch vụ
  quote: 'capy-house-focus', // nền câu trích dẫn

  // Trang Dịch vụ
  svcInterior: 'kitchen',

  // Trang Outsource Design (B2B)
  renderHero: 'enghouse-wine-room',
  renderGallery: ['enghouse-kitchen', 'enghouse-lounge', 'enghouse-living', 'enghouse-kitchen-dining'],

  // Trang Giới thiệu
  studio: 'wine-lounge',
  aboutPortrait: 'capy-house-focus',
  philosophySide: 'enghouse-living', // ảnh dọc dưới tiêu đề "Triết lý thiết kế"

  // Ảnh bìa bài tạp chí
  journalLight: 'wine-cabinet',
  journalHouse: 'capy-house',
  journalWood: 'wine-lounge',
};

const FALLBACK = 'wine-lounge';

function entry(key) {
  const name = images[key] || key;
  return manifest[name] ? name : FALLBACK;
}

// Đường dẫn ảnh gần nhất với chiều rộng yêu cầu.
export function imageSrc(key, w = 1600) {
  const name = entry(key);
  const { widths } = manifest[name];
  const pick = widths.find((x) => x >= w) || widths[widths.length - 1];
  return `/images/${name}-${pick}.webp`;
}

export function imageSrcSet(key) {
  const name = entry(key);
  return manifest[name].widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');
}

// true nếu ảnh nằm ngang — dùng để chọn tỉ lệ khung phù hợp.
export function isLandscape(key) {
  const { width, height } = manifest[entry(key)];
  return width > height;
}

// Tỉ lệ khung gốc của ảnh, dạng "rộng / cao" cho CSS aspect-ratio.
export function imageAspect(key) {
  const { width, height } = manifest[entry(key)];
  return `${width} / ${height}`;
}
