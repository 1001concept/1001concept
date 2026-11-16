// Tạo các phiên bản WebP nhẹ cho website từ ảnh gốc trong assets/originals.
// Cách dùng:  chép ảnh (.jpg/.png) vào assets/originals  →  npm run images
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets/originals';
const OUT = 'public/images';
const WIDTHS = [800, 1600, 2400];

// Giữ lại các ảnh đã có trong manifest (ảnh gốc có thể không còn trên máy này).
const MANIFEST = 'content/images.manifest.json';
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
for (const file of fs.readdirSync(SRC).sort()) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();
  // bỏ qua ảnh đã tạo rồi
  if (manifest[name] && manifest[name].widths.every((w) => fs.existsSync(path.join(OUT, `${name}-${w}.webp`)))) continue;
  // không tạo hai cỡ gần bằng nhau (ví dụ 1600 và 1647)
  const widths = WIDTHS.map((w) => Math.min(w, meta.width)).filter((w, i, all) => i === 0 || w - all[i - 1] > 200);
  for (const w of widths) {
    await sharp(input).resize({ width: w }).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { widths, width: meta.width, height: meta.height };
  console.log(`${name}: ${meta.width}x${meta.height} → ${widths.join(', ')}`);
}
fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
