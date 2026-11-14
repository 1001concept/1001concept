// Tạo các phiên bản WebP nhẹ cho website từ ảnh gốc trong assets/originals.
// Cách dùng:  chép ảnh (.jpg/.png) vào assets/originals  →  npm run images
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets/originals';
const OUT = 'public/images';
const WIDTHS = [800, 1600, 2400];

const manifest = {};
for (const file of fs.readdirSync(SRC).sort()) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();
  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, meta.width)))];
  for (const w of widths) {
    await sharp(input).resize({ width: w }).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { widths, width: meta.width, height: meta.height };
  console.log(`${name}: ${meta.width}x${meta.height} → ${widths.join(', ')}`);
}
fs.writeFileSync('content/images.manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
