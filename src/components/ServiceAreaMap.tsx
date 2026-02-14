"use client";

import { useState } from "react";

interface Client {
  id: string;
  x: number;
  y: number;
  label: string;
}

const areas = [
  {
    id: "west-van",
    name: "West Vancouver",
    path: "M60,55 L60,25 L200,15 L240,35 L240,105 L200,115 L140,110 L100,100 Z",
    labelX: 140,
    labelY: 70,
  },
  {
    id: "north-van",
    name: "North Vancouver",
    path: "M240,35 L400,15 L500,25 L520,55 L520,120 L460,135 L340,130 L240,115 L240,105 Z",
    labelX: 380,
    labelY: 80,
  },
  {
    id: "vancouver",
    name: "Vancouver",
    // Stanley Park bump, then south coast, then east border
    path: "M30,220 L30,175 L80,155 L110,140 L130,148 L140,135 L170,130 L160,155 L175,148 L200,155 L240,155 L340,148 L340,310 L200,320 L100,315 L30,290 Z",
    labelX: 185,
    labelY: 240,
  },
  {
    id: "burnaby",
    name: "Burnaby",
    path: "M340,148 L460,145 L520,140 L520,180 L530,200 L530,310 L480,320 L340,310 Z",
    labelX: 430,
    labelY: 235,
  },
  {
    id: "new-west",
    name: "New Westminster",
    path: "M400,310 L480,320 L500,330 L500,360 L420,355 L400,340 Z",
    labelX: 448,
    labelY: 340,
  },
  {
    id: "port-moody",
    name: "Port Moody",
    path: "M520,120 L580,100 L620,115 L620,180 L530,200 L520,180 L520,140 Z",
    labelX: 568,
    labelY: 155,
  },
  {
    id: "coquitlam",
    name: "Coquitlam",
    path: "M530,200 L620,180 L680,130 L720,150 L720,310 L620,320 L530,310 Z",
    labelX: 625,
    labelY: 250,
  },
  {
    id: "poco",
    name: "Port Coquitlam",
    path: "M720,150 L780,170 L780,330 L720,340 L720,310 Z",
    labelX: 748,
    labelY: 260,
  },
  {
    id: "richmond",
    name: "Richmond",
    path: "M100,340 L350,335 L400,345 L400,420 L340,430 L120,425 L80,410 Z",
    labelX: 240,
    labelY: 385,
  },
  {
    id: "surrey",
    name: "Surrey",
    path: "M400,360 L500,365 L620,335 L720,345 L780,340 L780,490 L400,490 L400,420 Z",
    labelX: 580,
    labelY: 430,
  },
  {
    id: "delta",
    name: "Delta",
    path: "M60,430 L120,425 L340,430 L400,420 L400,490 L60,490 Z",
    labelX: 220,
    labelY: 465,
  },
];

// Sample clients - these can be populated from data
const sampleClients: Client[] = [
  { id: "c1", x: 200, y: 230, label: "Kitsilano" },
  { id: "c2", x: 300, y: 260, label: "Main St" },
  { id: "c3", x: 420, y: 210, label: "Metrotown" },
  { id: "c4", x: 375, y: 85, label: "Lynn Valley" },
  { id: "c5", x: 250, y: 390, label: "Richmond Centre" },
  { id: "c6", x: 560, y: 420, label: "Fleetwood" },
  { id: "c7", x: 640, y: 240, label: "Burke Mountain" },
  { id: "c8", x: 160, y: 200, label: "West End" },
];

export default function ServiceAreaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, text: "" });
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip((t) => ({
      ...t,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  return (
    <div className={`map-container${expanded ? " map-expanded" : ""}`}>
      <div className="map-header">
        <span className="map-label">SERVICE AREA</span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="map-label">{sampleClients.length} ACTIVE CLIENTS</span>
          <button
            type="button"
            className="map-toggle"
            onClick={() => setExpanded(!expanded)}
            title={expanded ? "Collapse map" : "Expand map"}
          >
            {expanded ? "⤡" : "⤢"}
          </button>
        </div>
      </div>
      <svg
        viewBox="0 0 820 510"
        className="map-svg"
        onMouseMove={handleMouseMove}
      >
        {/* Water features - Burrard Inlet */}
        <path
          d="M0,130 Q100,140 200,135 Q300,130 400,138 Q460,142 520,130"
          stroke="rgba(168,200,224,0.15)"
          strokeWidth="1"
          fill="none"
        />
        {/* Fraser River North Arm */}
        <path
          d="M0,325 Q100,330 200,328 Q300,325 400,335 Q500,340 600,330 Q700,335 800,338"
          stroke="rgba(168,200,224,0.15)"
          strokeWidth="1"
          fill="none"
        />
        {/* Fraser River South Arm */}
        <path
          d="M0,425 Q100,428 200,430 Q300,432 400,425 Q500,420 600,425"
          stroke="rgba(168,200,224,0.15)"
          strokeWidth="1"
          fill="none"
        />

        {/* Municipality outlines */}
        {areas.map((area) => (
          <g key={area.id}>
            <path
              d={area.path}
              fill={hovered === area.id ? "rgba(168,200,224,0.08)" : "transparent"}
              stroke={
                hovered === area.id
                  ? "rgba(245,240,235,0.5)"
                  : "rgba(245,240,235,0.12)"
              }
              strokeWidth={hovered === area.id ? 1.5 : 0.75}
              className="map-area"
              onMouseEnter={() => {
                setHovered(area.id);
                setTooltip((t) => ({ ...t, text: area.name }));
              }}
              onMouseLeave={() => {
                setHovered(null);
                setTooltip((t) => ({ ...t, text: "" }));
              }}
            />
            {/* Area labels */}
            <text
              x={area.labelX}
              y={area.labelY}
              className="map-area-label"
              fill={
                hovered === area.id
                  ? "rgba(245,240,235,0.6)"
                  : "rgba(245,240,235,0.2)"
              }
            >
              {area.name.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Client markers */}
        {sampleClients.map((client) => (
          <g
            key={client.id}
            onMouseEnter={() => {
              setHoveredClient(client.id);
              setTooltip((t) => ({ ...t, text: client.label }));
            }}
            onMouseLeave={() => {
              setHoveredClient(null);
              setTooltip((t) => ({ ...t, text: "" }));
            }}
            className="map-client"
          >
            {/* Pulse ring */}
            <circle
              cx={client.x}
              cy={client.y}
              r={hoveredClient === client.id ? 10 : 6}
              fill="none"
              stroke="#E8A0A0"
              strokeWidth="0.5"
              opacity={hoveredClient === client.id ? 0.6 : 0.3}
              className="map-pulse"
            />
            {/* Dot */}
            <circle
              cx={client.x}
              cy={client.y}
              r={hoveredClient === client.id ? 4 : 2.5}
              fill="#E8A0A0"
              opacity={0.9}
              style={{ transition: "r 0.2s" }}
            />
          </g>
        ))}

        {/* Tooltip */}
        {tooltip.text && (
          <g
            transform={`translate(${tooltip.x + 12}, ${tooltip.y - 8})`}
            style={{ pointerEvents: "none" }}
          >
            <rect
              x="0"
              y="-10"
              width={tooltip.text.length * 7.5 + 16}
              height="18"
              rx="4"
              fill="rgba(245,240,235,0.9)"
            />
            <text
              x="8"
              y="3"
              fill="#1C2836"
              style={{
                fontSize: "9px",
                fontFamily: "var(--font-tech)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {tooltip.text}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
