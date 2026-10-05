import type { SVGProps } from "react";

export type Palette = Record<string, string>;

/**
 * Renders a pixel sprite from a character map. Each row is a string; each character is
 * looked up in `palette` ("." or any unmapped char = transparent). Horizontal runs of the
 * same colour are merged into one <rect> to keep the DOM small.
 */
export function Sprite({
  map,
  palette,
  x = 0,
  y = 0,
  title,
  ...props
}: { map: string[]; palette: Palette; x?: number; y?: number; title?: string } & SVGProps<SVGGElement>) {
  const rects: React.ReactNode[] = [];
  map.forEach((row, ry) => {
    let start = 0;
    for (let i = 1; i <= row.length; i++) {
      if (i === row.length || row[i] !== row[start]) {
        const fill = palette[row[start]];
        if (fill) {
          rects.push(<rect key={`${ry}-${start}`} x={x + start} y={y + ry} width={i - start} height={1} fill={fill} />);
        }
        start = i;
      }
    }
  });
  return (
    <g shapeRendering="crispEdges" {...props}>
      {title && <title>{title}</title>}
      {rects}
    </g>
  );
}

/** Standalone sprite as its own <svg>, scaled to fit its container. */
export function SpriteSvg({
  map,
  palette,
  className,
  label,
}: {
  map: string[];
  palette: Palette;
  className?: string;
  label: string;
}) {
  const w = Math.max(...map.map((r) => r.length));
  return (
    <svg viewBox={`0 0 ${w} ${map.length}`} className={className} role="img" aria-label={label} shapeRendering="crispEdges">
      <Sprite map={map} palette={palette} />
    </svg>
  );
}

export const INK = "#141414";
