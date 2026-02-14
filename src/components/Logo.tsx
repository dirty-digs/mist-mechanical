"use client";

export default function Logo() {
  return (
    <div className="logo-wrap">
      <svg
        viewBox="0 0 220 180"
        width="200"
        height="163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Rotating beams - 180 degrees apart, wider spread */}
        <g className="beam-rotate" style={{ transformOrigin: "110px 48px" }}>
          <polygon
            points="110,48 88,-10 132,-10"
            fill="#E8A0A0"
            opacity="0.45"
          />
          <polygon
            points="110,48 88,106 132,106"
            fill="#A8C8E0"
            opacity="0.45"
          />
        </g>

        {/* Lighthouse - taller, with bands */}
        {/* Base widens slightly */}
        <polygon
          points="104,48 106,100 114,100 116,48"
          fill="#1C2836"
        />
        {/* Horizontal bands */}
        <line x1="105" y1="62" x2="115" y2="62" stroke="#F5F0EB" strokeWidth="1" opacity="0.4" />
        <line x1="105" y1="74" x2="115" y2="74" stroke="#F5F0EB" strokeWidth="1" opacity="0.4" />
        <line x1="105.5" y1="86" x2="114.5" y2="86" stroke="#F5F0EB" strokeWidth="1" opacity="0.4" />
        {/* Lantern room - gallery deck */}
        <rect x="100" y="44" width="20" height="6" rx="1" fill="#1C2836" />
        {/* Lantern glass */}
        <rect x="103" y="36" width="14" height="9" rx="2" fill="#F5F0EB" stroke="#1C2836" strokeWidth="1.2" />
        {/* Light dot */}
        <circle cx="110" cy="40" r="2.5" fill="#1C2836" />
        {/* Dome cap */}
        <path d="M105,36 Q110,30 115,36" fill="#1C2836" />

        {/* Mountains - asymmetric peaks, natural terrain feel */}
        {/* Left peak (taller) */}
        <polyline
          points="5,148 35,82 60,100 78,88"
          stroke="#1C2836"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Saddle / valley with foothills */}
        <polyline
          points="78,88 95,108 110,100 125,108 142,85"
          stroke="#1C2836"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right peak (slightly shorter) */}
        <polyline
          points="142,85 158,98 175,78 195,92 215,148"
          stroke="#1C2836"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Subtle ridge lines for depth */}
        <polyline
          points="25,148 55,118 75,128 95,120"
          stroke="#1C2836"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.2"
        />
        <polyline
          points="125,118 145,128 170,112 200,148"
          stroke="#1C2836"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.2"
        />

        {/* Ground line */}
        <line x1="15" y1="148" x2="205" y2="148" stroke="#1C2836" strokeWidth="0.8" opacity="0.15" />
      </svg>

      <div className="logo-text">
        <span className="logo-title-top">MIST</span>
        <span className="logo-title-bottom">MECHANICAL</span>
      </div>
    </div>
  );
}
