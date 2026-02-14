"use client";

export default function Logo() {
  return (
    <div className="logo-wrap">
      <svg
        viewBox="0 0 220 170"
        width="200"
        height="155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Rotating beams - 180 degrees apart */}
        <g className="beam-rotate" style={{ transformOrigin: "110px 42px" }}>
          <polygon
            points="110,42 90,-15 130,-15"
            fill="#E8A0A0"
            opacity="0.4"
          />
          <polygon
            points="110,42 90,99 130,99"
            fill="#A8C8E0"
            opacity="0.4"
          />
        </g>

        {/* Lighthouse */}
        {/* Tower - tapers slightly */}
        <polygon
          points="105,50 107,98 113,98 115,50"
          fill="#1C2836"
        />
        {/* Bands */}
        <line x1="106" y1="62" x2="114" y2="62" stroke="#F5F0EB" strokeWidth="0.8" opacity="0.4" />
        <line x1="106" y1="72" x2="114" y2="72" stroke="#F5F0EB" strokeWidth="0.8" opacity="0.4" />
        <line x1="107" y1="82" x2="113" y2="82" stroke="#F5F0EB" strokeWidth="0.8" opacity="0.4" />
        {/* Gallery deck */}
        <rect x="101" y="46" width="18" height="5" rx="1" fill="#1C2836" />
        {/* Lantern room */}
        <rect x="104" y="38" width="12" height="9" rx="2" fill="#F5F0EB" stroke="#1C2836" strokeWidth="1.2" />
        <circle cx="110" cy="42" r="2" fill="#1C2836" />
        {/* Dome */}
        <path d="M106,38 Q110,32 114,38" fill="#1C2836" />

        {/* Mountain M - two peaks with valley, reads as both M and mountains */}
        {/* Left slope up to left peak */}
        <polyline
          points="8,148 42,75"
          stroke="#1C2836"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Left peak down to valley */}
        <polyline
          points="42,75 72,108 110,98"
          stroke="#1C2836"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Valley up to right peak */}
        <polyline
          points="110,98 148,108 170,70"
          stroke="#1C2836"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right peak down to slope */}
        <polyline
          points="170,70 212,148"
          stroke="#1C2836"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Subtle snow line / ridge detail on left peak */}
        <polyline
          points="32,90 42,75 55,88"
          stroke="#1C2836"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
        {/* Ridge detail on right peak */}
        <polyline
          points="160,86 170,70 182,85"
          stroke="#1C2836"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />

        {/* Foothills / ground line for depth */}
        <line x1="25" y1="148" x2="195" y2="148" stroke="#1C2836" strokeWidth="0.6" opacity="0.12" />
      </svg>

      <div className="logo-text">
        <span className="logo-title-top">MIST</span>
        <span className="logo-title-bottom">MECHANICAL</span>
      </div>
    </div>
  );
}
