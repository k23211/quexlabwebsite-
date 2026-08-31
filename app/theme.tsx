import Image from "next/image";

export const INK = "#0B1220";
export const FOREST = "#0F3D2E";
export const LEAF = "#2FA84F";
export const PAPER = "#F7F8F5";
export const INK_SOFT = "#5B6472";

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
