"use client";

interface SparkProps {
  values: number[];
  color?: string;
  height?: number;
  fill?: boolean;
}

export function Spark({
  values,
  color = "var(--color-tech)",
  height = 28,
  fill = true,
}: SparkProps) {
  const w = 120;
  const h = height;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
    return [x, y] as [number, number];
  });
  const d = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const dFill = `${d} L${w},${h} L0,${h} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height={h}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {fill && <path d={dFill} fill={color} opacity="0.12" />}
      <path d={d} stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="2.5" fill={color} />
    </svg>
  );
}
