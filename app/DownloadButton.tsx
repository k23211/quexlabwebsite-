"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.agriquexdata.app";
const APP_STORE_URL =
  "https://apps.apple.com/gh/app/agriquex-hub/id6799785601";

export default function DownloadButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18372099949/TulxCJProNwcEO3-v7hE",
      });
    }
  };

  return (
    <>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Get it on Google Play"
        className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
      >
        <svg
          width="167"
          height="50"
          viewBox="0 0 167 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="167" height="50" rx="6" fill="#000000" />
          <rect
            x="0.5"
            y="0.5"
            width="166"
            height="49"
            rx="5.5"
            fill="none"
            stroke="#A6A6A6"
            strokeWidth="0.5"
          />
          {/* Play triangle, four-tone */}
          <g transform="translate(14, 11)">
            <path d="M0 1.3C0 0.5 0.5 0 1.1 0L1.1 28C0.5 28 0 27.5 0 26.7Z" fill="#00C3FF" />
            <path d="M1.1 0L15.5 14L1.1 28C0.9 27.9 0.7 27.6 0.7 27.3L0.7 0.7C0.7 0.4 0.9 0.1 1.1 0Z" fill="#00E37E" fillOpacity="0" />
            <path d="M1.1 0C1.3 0 1.6 0.1 1.8 0.2L20.3 10.5C21.1 11 21.1 12.1 20.3 12.5L16.4 14.7L1.1 0Z" fill="#32BBFF" />
            <path d="M16.4 14.7L20.3 16.9C21.1 17.4 21.1 18.5 20.3 19L1.8 29.3C1.6 29.4 1.3 29.5 1.1 29.5L16.4 14.7Z" fill="#F63448" />
            <path d="M1.1 0L16.4 14.7L1.1 29.5C0.5 29.4 0 28.9 0 28.1L0 1.4C0 0.6 0.5 0.1 1.1 0Z" fill="#32BBFF" />
            <path d="M16.4 14.7L1.1 29.5C0.5 29.4 0 28.9 0 28.1L0 27.9L14.4 14.7L16.4 14.7Z" fill="#2BD2FF" />
          </g>
          <text
            x="42"
            y="21"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="8.5"
            fill="#FFFFFF"
          >
            GET IT ON
          </text>
          <text
            x="42"
            y="37"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="16.5"
            fontWeight="500"
            fill="#FFFFFF"
          >
            Google Play
          </text>
        </svg>
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
      >
        <svg
          width="150"
          height="50"
          viewBox="0 0 150 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="50" rx="6" fill="#000000" />
          {/* Apple logo */}
          <g transform="translate(15, 12)">
            <path
              d="M18.6 4.9c-1 1.2-2.6 2.1-4.2 2-.2-1.6.6-3.3 1.5-4.3 1-1.2 2.7-2.1 4.1-2.2.2 1.7-.5 3.3-1.4 4.5zM20 7.6c-2.3-.1-4.3 1.3-5.4 1.3-1.1 0-2.8-1.3-4.6-1.2-2.4 0-4.5 1.4-5.7 3.5-2.5 4.3-.6 10.6 1.7 14.1 1.1 1.7 2.5 3.6 4.3 3.5 1.7-.1 2.4-1.1 4.5-1.1 2.1 0 2.7 1.1 4.6 1.1 1.9 0 3.1-1.7 4.3-3.4 1.3-2 1.9-3.9 1.9-4 0 0-3.7-1.4-3.7-5.6 0-3.5 2.9-5.2 3-5.3-1.7-2.4-4.2-2.7-5.1-2.9z"
              fill="#FFFFFF"
            />
          </g>
          <text
            x="42"
            y="21"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="8"
            fill="#FFFFFF"
          >
            Download on the
          </text>
          <text
            x="42"
            y="37"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="17"
            fontWeight="500"
            fill="#FFFFFF"
          >
            App Store
          </text>
        </svg>
      </a>
    </>
  );
}
