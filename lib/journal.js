import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { locales } from '@/content/site';

const ROOT = path.join(process.cwd(), 'content', 'journal');

function readPost(lang, file) {
  const raw = fs.readFileSync(path.join(ROOT, lang, file), 'utf8');
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title,
    excerpt: data.excerpt || '',
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    cover: data.cover,
    minutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

export function getPosts(lang) {
  if (!locales.includes(lang)) return [];
  const dir = path.join(ROOT, lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readPost(lang, f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(lang, slug) {
  const file = `${slug}.md`;
  if (!locales.includes(lang) || !/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(ROOT, lang, file))) return null;
  const post = readPost(lang, file);
  // Ảnh trong bài: tải chậm, và một đoạn chỉ có ảnh thì thành khối ảnh riêng.
  const html = marked
    .parse(post.content)
    .replace(/<p>(<img [^>]*>)<\/p>/g, '<figure>$1</figure>')
    .replace(/<img /g, '<img loading="lazy" decoding="async" ');
  return { ...post, html };
}

export function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
