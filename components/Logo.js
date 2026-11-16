// Logo 1001CONCEPT VIETNAM.
// - "1001CONCEPT" lấy nguyên từ file logo gốc (public/images/logo-1001concept.webp),
//   dùng làm mặt nạ để logo tự đổi màu theo chữ xung quanh (currentColor).
// - "VIETNAM" được vẽ lại bằng nét vector cùng chiều cao và độ dày nét với logo gốc,
//   thay cho chữ "INTERIOR" trong file gốc.
const H = 131; // chiều cao chữ trong file gốc (px)
const SRC_W = 2000; // kích thước file gốc
const SRC_H = 132;
const MARK_W = 1211; // phần "1001CONCEPT" trong file gốc
const FULL_W = 2020;
const S = 15; // độ dày nét

export const LOGO_RATIO = FULL_W / H;
export const LOGO_MARK_RATIO = MARK_W / H;

export default function Logo({ id = 'logo', className = '' }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${FULL_W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="1001CONCEPT VIETNAM"
      fill="none"
    >
      <defs>
        <mask
          id={`${id}-mark`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={MARK_W}
          height={H}
          style={{ maskType: 'alpha' }}
        >
          <image href="/images/logo-1001concept.webp" x="0" y="0" width={SRC_W} height={SRC_H} />
        </mask>
        <clipPath id={`${id}-clip`}>
          <rect x="1290" y="0" width={FULL_W - 1290} height={H} />
        </clipPath>
      </defs>

      {/* 1001CONCEPT — từ logo gốc */}
      <rect x="0" y="0" width={MARK_W} height={H} fill="currentColor" mask={`url(#${id}-mark)`} />

      {/* VIETNAM — vẽ lại */}
      <g
        clipPath={`url(#${id}-clip)`}
        stroke="currentColor"
        strokeWidth={S}
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        {/* V */}
        <path d="M1295.800 -26 L1354 131 L1412.200 -26" />
        {/* I */}
        <path d="M1433.500 0 V131" />
        {/* E */}
        <path d="M1453 7.500 H1538 M1453 65.500 H1538 M1453 123.500 H1538" />
        {/* T */}
        <path d="M1550 7.500 H1639 M1594.500 0 V131" />
        {/* N */}
        <path d="M1658.500 131 V0 M1658.500 -8 L1748.500 139 M1748.500 131 V0" />
        {/* A */}
        <path d="M1769.800 157 L1828 0 L1886.200 157" />
        {/* M */}
        <path d="M1907.500 131 V0 M1907.500 -10 L1960 131 L2012.500 -10 M2012.500 0 V131" />
      </g>
    </svg>
  );
}

// Biểu tượng tròn của logo (public/images/logo-mark.webp), dùng trên header điện thoại
// sau khi người xem cuộn xuống. Cũng tự đổi màu theo chữ xung quanh.
export function LogoMark({ id = 'logo-mark', className = '' }) {
  const W = 441;
  const MH = 400;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${MH}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={MH} style={{ maskType: 'alpha' }}>
          <image href="/images/logo-mark.webp" x="0" y="0" width={W} height={MH} />
        </mask>
      </defs>
      <rect x="0" y="0" width={W} height={MH} fill="currentColor" mask={`url(#${id})`} />
    </svg>
  );
}
