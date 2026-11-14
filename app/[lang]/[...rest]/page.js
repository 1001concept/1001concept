import { notFound } from 'next/navigation';

// Mọi đường dẫn không khớp trang nào sẽ hiện trang 404 trong giao diện chung.
export default function CatchAll() {
  notFound();
}
