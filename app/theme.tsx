import Image from "next/image";

export const INK = "#13231F";
export const FOREST = "#174D3D";
export const LEAF = "#75A84B";
export const PAPER = "#F2F0E9";
export const INK_SOFT = "#64716B";

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
