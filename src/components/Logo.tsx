"use client";

export default function Logo() {
  return (
    <div className="logo-wrap">
      <svg
        viewBox="0 0 220 210"
        width="200"
        height="190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Mountain M — sharp angular, reference style */}
        {/* One continuous polyline: left foot → shoulder → main peak → valley → right peak → right foot */}
        <polyline
          points="8,128 48,68 58,78 98,14 128,78 158,42 208,128"
          stroke="#1C2836"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Waterline — subtle separator between mountain and sea */}
        <line x1="30" y1="138" x2="190" y2="138" stroke="#1C2836" strokeWidth="0.6" opacity="0.15" />

        {/* Lighthouse — centered below the M, on the water */}
        {/* Rotating beams — origin at lantern */}
        <g className="beam-rotate" style={{ transformOrigin: "110px 158px" }}>
          <polygon
            points="110,158 88,115 132,115"
            fill="#E8A0A0"
            opacity="0.35"
          />
          <polygon
            points="110,158 88,201 132,201"
            fill="#A8C8E0"
            opacity="0.35"
          />
        </g>

        {/* Tower — tapers slightly */}
        <polygon
          points="106,165 107.5,196 112.5,196 114,165"
          fill="#1C2836"
        />
        {/* Bands */}
        <line x1="107" y1="175" x2="113" y2="175" stroke="#F5F0EB" strokeWidth="0.7" opacity="0.4" />
        <line x1="107" y1="183" x2="113" y2="183" stroke="#F5F0EB" strokeWidth="0.7" opacity="0.4" />
        {/* Gallery deck */}
        <rect x="103" y="162" width="14" height="4" rx="1" fill="#1C2836" />
        {/* Lantern room */}
        <rect x="105" y="155" width="10" height="8" rx="1.5" fill="#F5F0EB" stroke="#1C2836" strokeWidth="1" />
        <circle cx="110" cy="158" r="1.5" fill="#1C2836" />
        {/* Dome cap */}
        <path d="M107,155 Q110,150 113,155" fill="#1C2836" />
        {/* Base platform */}
        <rect x="100" y="196" width="20" height="3" rx="1" fill="#1C2836" opacity="0.3" />
      </svg>

      <div className="logo-text">
        <span className="logo-title-top">MIST</span>
        <span className="logo-title-bottom">MECHANICAL</span>
      </div>
    </div>
  );
}
