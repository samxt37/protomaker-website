/**
 * Protomaker logo mark — inline SVG: 3D layer grid / nozzle forming the letter P.
 * Layers (white) + nozzle dot (neon teal). Color inherited via CSS variables.
 */
export default function Logo({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="logo-mark"
    >
      {/* vertical stem of the P */}
      <rect x="7" y="4" width="4" height="24" fill="var(--text-primary)" />
      {/* layered bowl bars (3D grid) */}
      <rect x="7" y="4" width="17" height="6" fill="var(--accent)" />
      <rect x="7" y="12" width="13" height="6" fill="var(--text-primary)" opacity="0.85" />
      <rect x="7" y="20" width="7" height="5" fill="var(--text-primary)" opacity="0.45" />
      {/* nozzle tip */}
      <circle cx="27" cy="5" r="2.6" fill="var(--accent)" />
    </svg>
  );
}
