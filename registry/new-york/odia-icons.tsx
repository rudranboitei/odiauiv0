import * as React from "react";

/**
 * OdiaUI — medallion icons (pure inline SVG, 48×48, no images)
 * Designed to sit inside the round indigo medallion of <AccordionTrigger icon={...} />
 */

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  "aria-hidden": true,
  fill: "none",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

/* Konark Sun Temple chariot wheel (Surya Chakra) */
export const KonarkWheelIcon = (props: IconProps) => {
  const angles = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="20" stroke="#f2c867" strokeWidth="2.4" />
      <circle cx="24" cy="24" r="16.5" stroke="#f2c867" strokeWidth="1" />
      {/* beads on the rim */}
      {angles.map((a) => (
        <circle
          key={`rim-${a}`}
          cx="24"
          cy="5.2"
          r="1"
          fill="#f2c867"
          transform={`rotate(${a + 22.5} 24 24)`}
        />
      ))}
      {/* spokes */}
      {angles.map((a) => (
        <g key={a} transform={`rotate(${a} 24 24)`}>
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="8"
            stroke="#f2c867"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="13" r="1.7" fill="#f2c867" />
        </g>
      ))}
      <circle cx="24" cy="24" r="5" fill="#f2c867" />
      <circle cx="24" cy="24" r="2" fill="#1e1752" />
    </svg>
  );
};

/* Lord Jagannath — Pattachitra style face */
export const JagannathIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle
      cx="24"
      cy="24"
      r="21"
      fill="#c2481b"
      stroke="#f2c867"
      strokeWidth="1.2"
    />
    <circle cx="24" cy="24" r="16" fill="#17110d" />
    {/* forehead mark */}
    <path
      d="M24 9.5v5"
      stroke="#f2c867"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* big round eyes */}
    <circle
      cx="17"
      cy="23"
      r="6.4"
      fill="#fff"
      stroke="#c2481b"
      strokeWidth="1.6"
    />
    <circle
      cx="31"
      cy="23"
      r="6.4"
      fill="#fff"
      stroke="#c2481b"
      strokeWidth="1.6"
    />
    <circle cx="17" cy="23" r="2.7" fill="#17110d" />
    <circle cx="31" cy="23" r="2.7" fill="#17110d" />
    <circle cx="16.1" cy="22.1" r="0.8" fill="#fff" />
    <circle cx="30.1" cy="22.1" r="0.8" fill="#fff" />
    {/* smile */}
    <path
      d="M19.5 34c3 2.2 6 2.2 9 0"
      stroke="#e8863a"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* Sambalpuri ikat — nested diamond motif */
export const SambalpuriIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <polygon
      points="24,3 45,24 24,45 3,24"
      fill="#c2481b"
      stroke="#f2c867"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <polygon points="24,10 38,24 24,38 10,24" fill="#f2c867" />
    <polygon points="24,16 32,24 24,32 16,24" fill="#c2481b" />
    <polygon points="24,20 28,24 24,28 20,24" fill="#fff" />
    {/* feathered ikat edge ticks */}
    {[0, 90, 180, 270].map((a) => (
      <g key={a} transform={`rotate(${a} 24 24)`}>
        <circle cx="24" cy="6.8" r="1.2" fill="#fff" />
        <path
          d="M20.5 10.4l3.5-2.4 3.5 2.4"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    ))}
  </svg>
);

/* Odissi dancer in tribhangi pose */
export const OdissiDancerIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    {/* crown + head */}
    <path
      d="M20.6 8.2L24 2.8l3.4 5.4"
      stroke="#f2c867"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <circle cx="24" cy="10.6" r="3.2" fill="#f2c867" />
    {/* torso (tribhangi S-curve) */}
    <path
      d="M24 14c-2.4 4.6 2.2 7.6-0.2 12"
      stroke="#f2c867"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    {/* raised arm */}
    <path
      d="M23 16c-5-.6-9-3.6-12-8.6"
      stroke="#f2c867"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="10.4" cy="6.6" r="1.4" fill="#f2c867" />
    {/* bent arm */}
    <path
      d="M25 17c5.4 0 9.6 2.8 11.6 7.4"
      stroke="#f2c867"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="37.2" cy="25.6" r="1.4" fill="#f2c867" />
    {/* flared skirt with pleats */}
    <path
      d="M23.8 25.4C17.6 27.6 14 36 11.6 43.2h24.8C34 36 30 27.6 23.8 25.4z"
      fill="#f2c867"
    />
    <g stroke="#1e1752" strokeWidth="1" strokeLinecap="round">
      <path d="M23.8 28.5L18.4 43" />
      <path d="M23.8 28.5L24 43" />
      <path d="M23.8 28.5L29.6 43" />
    </g>
  </svg>
);
