"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Store = "google" | "apple";

export default function StoreBadge({
  href,
  store,
  trackConversion = false,
}: {
  href: string;
  store: Store;
  trackConversion?: boolean;
}) {
  const isGoogle = store === "google";
  const handleClick = () => {
    if (trackConversion && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18372099949/TulxCJProNwcEO3-v7hE",
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={isGoogle ? "Get it on Google Play" : "Download on the App Store"}
      className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
    >
      <svg
        width={isGoogle ? 167 : 150}
        height="50"
        viewBox={`0 0 ${isGoogle ? 167 : 150} 50`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <rect width={isGoogle ? 167 : 150} height="50" rx="6" fill="#000000" />
        {!isGoogle && (
          <g transform="translate(15, 12)">
            <path
              d="M18.6 4.9c-1 1.2-2.6 2.1-4.2 2-.2-1.6.6-3.3 1.5-4.3 1-1.2 2.7-2.1 4.1-2.2.2 1.7-.5 3.3-1.4 4.5zM20 7.6c-2.3-.1-4.3 1.3-5.4 1.3-1.1 0-2.8-1.3-4.6-1.2-2.4 0-4.5 1.4-5.7 3.5-2.5 4.3-.6 10.6 1.7 14.1 1.1 1.7 2.5 3.6 4.3 3.5 1.7-.1 2.4-1.1 4.5-1.1 2.1 0 2.7 1.1 4.6 1.1 1.9 0 3.1-1.7 4.3-3.4 1.3-2 1.9-3.9 1.9-4 0 0-3.7-1.4-3.7-5.6 0-3.5 2.9-5.2 3-5.3-1.7-2.4-4.2-2.7-5.1-2.9z"
              fill="#FFFFFF"
            />
          </g>
        )}
        {isGoogle && (
          <g transform="translate(14, 11)">
            <path d="M0 1.3C0 0.5 0.5 0 1.1 0L1.1 28C0.5 28 0 27.5 0 26.7Z" fill="#00C3FF" />
            <path d="M1.1 0C1.3 0 1.6 0.1 1.8 0.2L20.3 10.5C21.1 11 21.1 12.1 20.3 12.5L16.4 14.7L1.1 0Z" fill="#32BBFF" />
            <path d="M16.4 14.7L20.3 16.9C21.1 17.4 21.1 18.5 20.3 19L1.8 29.3C1.6 29.4 1.3 29.5 1.1 29.5L16.4 14.7Z" fill="#F63448" />
            <path d="M1.1 0L16.4 14.7L1.1 29.5C0.5 29.4 0 28.9 0 28.1L0 1.4C0 0.6 0.5 0.1 1.1 0Z" fill="#32BBFF" />
          </g>
        )}
        <text x="42" y="21" fontFamily="Arial, Helvetica, sans-serif" fontSize={isGoogle ? "8.5" : "8"} fill="#FFFFFF">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </text>
        <text x="42" y="37" fontFamily="Arial, Helvetica, sans-serif" fontSize={isGoogle ? "16.5" : "17"} fontWeight="500" fill="#FFFFFF">
          {isGoogle ? "Google Play" : "App Store"}
        </text>
      </svg>
    </a>
  );
}
