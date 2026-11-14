# 1001CONCEPT VIETNAM — Website

Website song ngữ (Tiếng Việt / English) cho studio kiến trúc & nội thất 1001CONCEPT.
Xây bằng **Node.js + Next.js 15** (App Router), không cần cơ sở dữ liệu.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000 (tự chuyển sang `/vi`).

Bản production:

```bash
npm run build
npm start
```

## Cấu trúc

| Thư mục | Nội dung |
| --- | --- |
| `content/site.js` | Số điện thoại, Zalo, email, địa chỉ, mạng xã hội, số liệu nổi bật |
| `content/projects.js` | Danh sách dự án (song ngữ) |
| `content/images.js` | Kho ảnh — gán ảnh cho từng vị trí trên website |
| `assets/originals/` | Ảnh gốc độ phân giải cao (không đưa thẳng lên web) |
| `content/journal/vi`, `content/journal/en` | Bài tạp chí dạng Markdown |
| `lib/dict.js` | Toàn bộ chữ trên giao diện, theo từng ngôn ngữ |
| `app/[lang]/…` | Các trang: trang chủ, dự án, dịch vụ, quy trình, giới thiệu, tạp chí, liên hệ |
| `app/globals.css` | Màu sắc, kiểu chữ, toàn bộ style (nền giấy sáng, chữ mực) |
| `components/Header.js` | Menu chính và các nhóm xổ xuống |
| `components/SmoothScroll.js` | Cuộn mượt (Lenis) và hiệu ứng ảnh trượt theo cuộn |

## Việc cần làm trước khi công bố

Mọi nội dung hiện tại là **dữ liệu mẫu**:

1. `content/site.js` — thay số điện thoại, Zalo, email, địa chỉ, link mạng xã hội và các con số (120+ công trình, 9 năm…).
2. `content/projects.js` — thay bằng dự án thật.
3. Ảnh — toàn bộ ảnh hiện là ảnh công trình của 1001CONCEPT (lấy từ Instagram của công ty). Thêm ảnh mới: chép file gốc vào `assets/originals/`, chạy `npm run images`, rồi gán tên file trong `content/images.js`.
4. `content/journal/` — sửa hoặc thêm bài. Mỗi bài cần hai file cùng tên trong `vi/` và `en/`.
5. Video mở đầu — chép video vào `public/video/` rồi điền `heroVideo: '/video/hero.mp4'` trong `content/site.js`. Để trống thì trang chủ dùng ảnh `hero`. Nên dùng file MP4 dưới 8 MB, không tiếng, dài 10–20 giây.
6. Logo — hiện là chữ "1001CONCEPT" dựng bằng font. Khi có file logo, thay trong `components/Header.js` và `components/Chrome.js`.

### Thêm bài tạp chí

Tạo `content/journal/vi/ten-bai.md` (và bản `en/` cùng tên):

```md
---
title: Tiêu đề bài viết
excerpt: Mô tả ngắn hiện ở danh sách bài.
date: 2026-11-13
cover: livingA
---

Nội dung viết bằng Markdown…
```

`cover` là khóa trong `content/images.js` hoặc đường dẫn `/images/...`.

## Đưa lên GitHub

```bash
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

## Deploy lên Hostinger (gói Business / Cloud)

1. hPanel → **Websites** → **Add Website** → **Node.js Apps** (Node.js Web App).
2. Chọn **Import Git Repository**, kết nối GitHub và chọn repo này, nhánh `main`.
3. Cấu hình build:
   - Framework: **Next.js**
   - Node.js: **20** hoặc **22**
   - Install command: `npm install`
   - Build command: `npm run build`
   - Start command: `npm start`
4. Thêm biến môi trường `NEXT_PUBLIC_SITE_URL` = tên miền chính thức, ví dụ `https://1001concept.vn` (dùng cho SEO, sitemap, ảnh chia sẻ).
5. Bấm **Deploy**. Mỗi lần `git push` lên `main`, Hostinger tự build và cập nhật lại.
6. Trỏ tên miền về website và bật SSL trong hPanel.

## Ghi chú

- Form báo giá ở trang Liên hệ **không gửi dữ liệu về máy chủ**: nội dung được soạn sẵn để khách tự gửi qua Zalo, email hoặc gọi điện.
- Sitemap: `/sitemap.xml` · Robots: `/robots.txt`.
