import Link from 'next/link';

// Trang 404 dùng chung cho cả hai ngôn ngữ.
export default function NotFound() {
  return (
    <section className="nf">
      <div>
        <p className="num">404</p>
        <h1 className="h2">Không tìm thấy trang · Page not found</h1>
        <p>Trang bạn tìm không tồn tại hoặc đã được chuyển đi.</p>
        <Link className="btn btn--solid" href="/vi">
          Về trang chủ · Home
        </Link>
      </div>
    </section>
  );
}
