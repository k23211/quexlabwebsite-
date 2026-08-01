"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

// Email is split and reversed so it doesn't appear as plain text in the
// initial HTML source, making it harder for basic scraper bots to harvest.
const PARTS = ["gnopayga", "10trebla", "moc.liamg"];

export default function EmailLink({
  className,
  style,
  iconOnly = false,
  iconColor = "#000000",
  iconBg = "transparent",
}: {
  className?: string;
  style?: React.CSSProperties;
  iconOnly?: boolean;
  iconColor?: string;
  iconBg?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const decoded = PARTS.map((p) => p.split("").reverse().join("")).join("");
    // decoded = "agyapong" + "albert01" + "gmail.com" -> needs @ and .
    const local = decoded.slice(0, 16); // agyapongalbert01
    const domain = decoded.slice(16); // gmail.com
    setEmail(`${local}@${domain}`);
  }, []);

  if (!email) {
    return iconOnly ? (
      <span
        aria-hidden
        className={className}
        style={{ ...style, background: iconBg }}
      />
    ) : (
      <span className={className} style={style}>
        Loading contact…
      </span>
    );
  }

  if (iconOnly) {
    return (
      <a
        href={`mailto:${email}`}
        aria-label="Email us"
        title={email}
        className={className}
        style={{ ...style, background: iconBg }}
      >
        <Mail size={18} color={iconColor} />
      </a>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className} style={style}>
      {email}
    </a>
  );
}
