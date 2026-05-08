"use client";

import { motion } from "framer-motion";

// ── Isometric cube ──────────────────────────────────────────────────
// cx, cy = center of the TOP face (top vertex of the diamond)
// hw     = horizontal half-width  (determines how wide the cube is)
// d      = vertical depth of the side faces
interface CubeProps {
  cx: number;
  cy: number;
  hw: number;
  d: number;
}

function IsoCube({ cx, cy, hw, d }: CubeProps) {
  const h = hw * 0.5; // isometric vertical offset

  const pts = (coords: [number, number][]) =>
    coords.map(([x, y]) => `${x},${y}`).join(" ");

  // Top face vertices
  const N: [number, number] = [cx, cy];
  const E: [number, number] = [cx + hw, cy + h];
  const S: [number, number] = [cx, cy + hw];
  const W: [number, number] = [cx - hw, cy + h];

  return (
    <g>
      {/* Left side face */}
      <polygon
        points={pts([W, S, [cx, cy + hw + d], [cx - hw, cy + h + d]])}
        fill="#0B1220"
        stroke="#AEB7C2"
        strokeOpacity="0.12"
        strokeWidth="0.6"
      />
      {/* Right side face */}
      <polygon
        points={pts([E, S, [cx, cy + hw + d], [cx + hw, cy + h + d]])}
        fill="#0B1220"
        stroke="#AEB7C2"
        strokeOpacity="0.12"
        strokeWidth="0.6"
      />
      {/* Top face — rendered last so it sits on top */}
      <polygon
        points={pts([N, E, S, W])}
        fill="#1A2333"
        stroke="#AEB7C2"
        strokeOpacity="0.18"
        strokeWidth="0.7"
      />
      {/* Subtle top-edge highlight line */}
      <line x1={N[0]} y1={N[1]} x2={E[0]} y2={E[1]} stroke="#8FBFBA" strokeWidth="1" opacity="0.45" />
      <line x1={N[0]} y1={N[1]} x2={W[0]} y2={W[1]} stroke="#8FBFBA" strokeWidth="1" opacity="0.45" />
    </g>
  );
}

// ── Icon helpers — placed on top face centers ──────────────────────
function BarChartIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <rect x="-11" y="1" width="4" height="10" fill="#8FBFBA" rx="0.5" />
      <rect x="-5" y="-5" width="4" height="16" fill="#8FBFBA" rx="0.5" />
      <rect x="1" y="-2" width="4" height="13" fill="#8FBFBA" rx="0.5" />
      <rect x="7" y="3" width="4" height="8" fill="#8FBFBA" rx="0.5" />
    </g>
  );
}

function NodeIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <circle cx="0" cy="-7" r="3.5" fill="none" stroke="#8FBFBA" strokeWidth="1.3" />
      <circle cx="-7" cy="5" r="3.5" fill="none" stroke="#8FBFBA" strokeWidth="1.3" />
      <circle cx="7" cy="5" r="3.5" fill="none" stroke="#8FBFBA" strokeWidth="1.3" />
      <line x1="0" y1="-3.5" x2="-4" y2="2" stroke="#8FBFBA" strokeWidth="1.1" />
      <line x1="0" y1="-3.5" x2="4" y2="2" stroke="#8FBFBA" strokeWidth="1.1" />
      <line x1="-3.5" y1="5" x2="3.5" y2="5" stroke="#8FBFBA" strokeWidth="1.1" />
    </g>
  );
}

function TrendIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <polyline
        points="-11,6 -5,-5 2,0 11,-8"
        fill="none"
        stroke="#8FBFBA"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="-8" r="2.5" fill="#8FBFBA" opacity="0.75" />
    </g>
  );
}

function GearIcon({ x, y }: { x: number; y: number }) {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <circle cx="0" cy="0" r="6" fill="none" stroke="#8FBFBA" strokeWidth="1.3" />
      <circle cx="0" cy="0" r="2.5" fill="#8FBFBA" opacity="0.85" />
      {spokes.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={Math.cos(rad) * 6.5}
            y1={Math.sin(rad) * 6.5}
            x2={Math.cos(rad) * 10}
            y2={Math.sin(rad) * 10}
            stroke="#8FBFBA"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

// ── Main visualization ─────────────────────────────────────────────
const cubes: CubeProps[] = [
  { cx: 188, cy: 102, hw: 52, d: 42 },  // A — left
  { cx: 300, cy: 44,  hw: 52, d: 42 },  // B — top-right
  { cx: 376, cy: 150, hw: 62, d: 50 },  // C — right (main)
  { cx: 244, cy: 238, hw: 52, d: 42 },  // D — bottom
];

// Top-face centers (cx, cy + hw * 0.5)
const centers = [
  { x: 188, y: 128 },  // A
  { x: 300, y: 70  },  // B
  { x: 376, y: 181 },  // C
  { x: 244, y: 264 },  // D
];

const networkDots = [
  { x: 244, y:  99 },  // A–B midpoint
  { x: 338, y: 125 },  // B–C midpoint
  { x: 310, y: 222 },  // C–D midpoint
  { x: 216, y: 196 },  // D–A midpoint
  { x: 282, y: 154 },  // interior crossing
];

const labelDots = [
  { x: 460, y: 100 },  // AUTOMATION
  { x: 460, y: 182 },  // INTEGRATION
  { x: 460, y: 264 },  // INSIGHTS
  { x: 460, y: 344 },  // GROWTH
];

const labels = [
  { text: "AUTOMATION",  sub: "Smart Workflows"    },
  { text: "INTEGRATION", sub: "Connected Systems"  },
  { text: "INSIGHTS",    sub: "Actionable Data"    },
  { text: "GROWTH",      sub: "Scalable Solutions" },
];

// Label line anchor points (from cubes/midpoints toward the right)
const labelAnchors = [
  { x: centers[1].x, y: centers[1].y },  // B → AUTOMATION
  { x: centers[2].x, y: centers[2].y },  // C → INTEGRATION
  { x: 310,          y: 222            },  // C–D mid → INSIGHTS
  { x: centers[3].x, y: centers[3].y },  // D → GROWTH
];

export default function CubeVisualization() {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 580 420"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="cg" cx="45%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#8FBFBA" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8FBFBA" stopOpacity="0"    />
          </radialGradient>
        </defs>

        {/* Ambient glow behind the cluster */}
        <ellipse cx="290" cy="200" rx="230" ry="175" fill="url(#cg)" />

        {/* ── Network lines ── */}
        <g stroke="#8FBFBA" strokeOpacity="0.38" strokeWidth="1.2" fill="none">
          {/* Cube interconnections */}
          <line x1={centers[0].x} y1={centers[0].y} x2={centers[1].x} y2={centers[1].y} />
          <line x1={centers[1].x} y1={centers[1].y} x2={centers[2].x} y2={centers[2].y} />
          <line x1={centers[2].x} y1={centers[2].y} x2={centers[3].x} y2={centers[3].y} />
          <line x1={centers[3].x} y1={centers[3].y} x2={centers[0].x} y2={centers[0].y} />
          <line x1={centers[0].x} y1={centers[0].y} x2={centers[2].x} y2={centers[2].y} />
          <line x1={centers[1].x} y1={centers[1].y} x2={centers[3].x} y2={centers[3].y} />

          {/* Lines extending to labels */}
          {labelAnchors.map((a, i) => (
            <line key={i} x1={a.x} y1={a.y} x2={labelDots[i].x} y2={labelDots[i].y} />
          ))}
        </g>

        {/* ── Isometric cubes (back to front) ── */}
        <IsoCube {...cubes[1]} />   {/* B — top */}
        <IsoCube {...cubes[0]} />   {/* A — left */}
        <IsoCube {...cubes[2]} />   {/* C — right/main */}
        <IsoCube {...cubes[3]} />   {/* D — bottom */}

        {/* ── Icons on cube top faces ── */}
        <BarChartIcon x={centers[0].x} y={centers[0].y} />
        <NodeIcon     x={centers[1].x} y={centers[1].y} />
        <TrendIcon    x={centers[2].x} y={centers[2].y} />
        <GearIcon     x={centers[3].x} y={centers[3].y} />

        {/* ── Network intersection dots ── */}
        {networkDots.map((d, i) => (
          <g key={`nd-${i}`}>
            <circle cx={d.x} cy={d.y} r="7" fill="#8FBFBA" opacity="0.15" />
            <circle cx={d.x} cy={d.y} r="3.5" fill="#8FBFBA" opacity="0.85" />
          </g>
        ))}

        {/* ── Label endpoint dots ── */}
        {labelDots.map((d, i) => (
          <g key={`ld-${i}`}>
            <circle cx={d.x} cy={d.y} r="7"   fill="#8FBFBA" opacity="0.18" />
            <circle cx={d.x} cy={d.y} r="3.5" fill="#8FBFBA" opacity="0.95" />
          </g>
        ))}

        {/* ── Labels ── */}
        {labels.map((l, i) => (
          <g key={l.text}>
            <text
              x="472"
              y={labelDots[i].y - 4}
              fill="#F4F7F9"
              fontSize="14"
              fontWeight="700"
              letterSpacing="2.5"
              fontFamily="Inter, Geist, system-ui, sans-serif"
            >
              {l.text}
            </text>
            <text
              x="472"
              y={labelDots[i].y + 14}
              fill="#AEB7C2"
              fontSize="12"
              fontFamily="Inter, Geist, system-ui, sans-serif"
            >
              {l.sub}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
