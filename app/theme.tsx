import Image from "next/image";

// Existing exports (kept so current components still compile)
export const INK = "#0F1A16";
export const FOREST = "#174D3D";
export const LEAF = "#35A86A";
export const PAPER = "#F6F7F4";
export const INK_SOFT = "#6B7571";

// New tokens
export const SURFACE = "#FFFFFF";
export const LINE = "#E3E6E1";
export const MUTED = "#A3AAA6";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Quexlab Technologies logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
      priority
    />
  );
}

// Small arrow used inside round buttons
export function ArrowIcon({
  size = 14,
  direction = "right",
}: {
  size?: number;
  direction?: "right" | "up-right" | "up" | "down";
}) {
  const rotate = {
    right: 0,
    "up-right": -45,
    up: -90,
    down: 90,
  }[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
