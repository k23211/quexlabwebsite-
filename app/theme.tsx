export const INK = "#0B1220";
export const FOREST = "#0F3D2E";
export const LEAF = "#2FA84F";
export const PAPER = "#F7F8F5";
export const INK_SOFT = "#5B6472";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z" stroke={INK} strokeWidth="7" />
      <path d="M50 28 L68 39 L68 61 L50 72 L32 61 L32 39 Z" fill={PAPER} />
      <path
        d="M46 58 C58 54 68 60 74 72 C64 70 56 74 52 82 C50 74 48 66 46 58 Z"
        fill={LEAF}
      />
      <circle cx="86" cy="14" r="3" stroke={LEAF} strokeWidth="2.5" fill={PAPER} />
      <path d="M86 17 L70 33" stroke={LEAF} strokeWidth="2.5" />
      <circle cx="70" cy="33" r="3" fill={LEAF} />
    </svg>
  );
}
