import { ClickBurst } from "./ClickBurst";

// Pixel-art cursors drawn from char maps: k = outline, y = fill.
const ARROW = [
  "k...........",
  "kk..........",
  "kyk.........",
  "kyyk........",
  "kyyyk.......",
  "kyyyyk......",
  "kyyyyyk.....",
  "kyyyyyyk....",
  "kyyyyyyyk...",
  "kyyyyyyyyk..",
  "kyyyyyykkkk.",
  "kyyykyyk....",
  "kyyk.kyyk...",
  "kyk..kyyk...",
  "kk....kyyk..",
  "k.....kyyk..",
  ".......kk...",
];

const HAND = [
  ".....kk.........",
  "....kyyk........",
  "....kyyk........",
  "....kyyk........",
  "....kyykkkk.....",
  "....kyykyykkkk..",
  "..kkkyykyykyykk.",
  ".kyykyyyyyyyyyk.",
  ".kyyyyyyyyyyyyk.",
  "..kyyyyyyyyyyyk.",
  "..kyyyyyyyyyyyk.",
  "...kyyyyyyyyyk..",
  "...kyyyyyyyyyk..",
  "....kyyyyyyyk...",
  "....kkkkkkkkk...",
];

const SCALE = 2;
const COLORS: Record<string, string> = { k: "#141414", y: "#ffc727" };

function cursorUrl(map: string[]) {
  const w = map[0].length * SCALE;
  const h = map.length * SCALE;
  const rects = map
    .flatMap((row, y) =>
      [...row].map((ch, x) =>
        COLORS[ch] ? `<rect x="${x * SCALE}" y="${y * SCALE}" width="${SCALE}" height="${SCALE}" fill="${COLORS[ch]}"/>` : "",
      ),
    )
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" shape-rendering="crispEdges">${rects}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const css = `
@media (pointer: fine) {
  html, body { cursor: ${cursorUrl(ARROW)} 0 0, auto; }
  a, button, [role="button"], label, summary, select { cursor: ${cursorUrl(HAND)} ${5 * SCALE} 0, pointer; }
}`;

/** Retro pixel cursors (CSS, zero lag) plus a pixel burst on click. */
export function PixelCursor() {
  return (
    <>
      <style>{css}</style>
      <ClickBurst />
    </>
  );
}
