// ─────────────────────────────────────────────────────────────
// KHO ẢNH — hiện là ảnh giữ chỗ từ Unsplash.
// Để dùng ảnh thật: chép file vào /public/images rồi đổi giá trị
// thành đường dẫn, ví dụ:  hero: '/images/hero.jpg'
// ─────────────────────────────────────────────────────────────
export const images = {
  hero: '1600585154340-be6161a56a0c',
  villaA: '1613490493576-7fde63acd811',
  villaB: '1600607688969-a5bfcd646154',
  houseA: '1600596542815-ffad4c1539a9',
  houseB: '1600585154363-67eb9e2e2099',
  houseC: '1600047509807-ba8f99d2cdde',
  archA: '1600585154526-990dced4db0d',
  archB: '1600566753376-12c8ab7fb75b',
  livingA: '1618221195710-dd6b41faaea6',
  livingB: '1600210492486-724fe5c67fb0',
  livingC: '1616486338812-3dadae4b4ace',
  livingD: '1600607687939-ce8a6c25118c',
  livingE: '1600121848594-d8644e57abab',
  livingF: '1583847268964-b28dc8f51f92',
  interiorA: '1600607687920-4e2a09cf159d',
  interiorB: '1617806118233-18e1de247200',
  interiorC: '1631679706909-1844bbd07221',
  interiorD: '1600566753086-00f18fb6b3ea',
  aptA: '1502672260266-1c1ef2d93688',
  aptB: '1600494603989-9650cf6ddd3d',
  aptC: '1616137466211-f939a420be84',
  kitchen: '1600489000022-c2086d79f9d4',
  bedroomA: '1616594039964-ae9021a400a0',
  bedroomB: '1505693416388-ac5ce068fe85',
  bath: '1600566752355-35792bedcfea',
  drafting: '1503387762-592deb58ef4e',
  studio: '1497366216548-37526070297c',
};

const WIDTHS = [640, 1024, 1600, 2400];

export function imageSrc(key, w = 1600) {
  const v = images[key] || key;
  if (v.startsWith('/') || v.startsWith('http')) return v;
  return `https://images.unsplash.com/photo-${v}?auto=format&fit=crop&q=72&w=${w}`;
}

export function imageSrcSet(key) {
  const v = images[key] || key;
  if (v.startsWith('/') || v.startsWith('http')) return undefined;
  return WIDTHS.map((w) => `${imageSrc(key, w)} ${w}w`).join(', ');
}
