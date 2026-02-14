"use client";

export default function Logo() {
  return (
    <div className="logo-wrap">
      {/* Mountain M + Lighthouse SVG */}
      <svg
        viewBox="0 0 200 160"
        width="180"
        height="144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Rotating beam group - two beams 180 degrees apart */}
        <g className="beam-rotate" style={{ transformOrigin: "100px 52px" }}>
          {/* Pastel red beam */}
          <polygon
            points="100,52 85,0 115,0"
            fill="#E8A0A0"
            opacity="0.55"
          />
          {/* Pastel blue beam (180 degrees opposite) */}
          <polygon
            points="100,52 85,104 115,104"
            fill="#A8C8E0"
            opacity="0.55"
          />
        </g>

        {/* Lighthouse tower */}
        <rect x="94" y="52" width="12" height="48" rx="2" fill="#1C2836" />

        {/* Lighthouse lamp housing */}
        <circle cx="100" cy="52" r="10" fill="#F5F0EB" stroke="#1C2836" strokeWidth="1.5" />
        <circle cx="100" cy="52" r="4" fill="#1C2836" />

        {/* Mountain M shape */}
        <polyline
          points="20,130 50,60 100,110 150,60 180,130"
          stroke="#1C2836"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Small base platform */}
        <line x1="85" y1="130" x2="115" y2="130" stroke="#1C2836" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Brand text */}
      <div className="logo-text">
        <span className="logo-title-top">MIST</span>
        <span className="logo-title-bottom">MECHANICAL</span>
      </div>
    </div>
  );
}
