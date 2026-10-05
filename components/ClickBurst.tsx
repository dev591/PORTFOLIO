"use client";

import { useEffect } from "react";

const COLORS = ["#ffc727", "#dc2626", "#2563eb", "#141414"];
const DIRECTIONS = [
  [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1],
];

/** Spawns a ring of pixel squares at each mouse click, like a retro game hit effect. */
export function ClickBurst() {
  useEffect(() => {
    const fine = matchMedia("(pointer: fine)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0 || !fine.matches || reduced.matches) return;
      DIRECTIONS.forEach(([dx, dy], i) => {
        const px = document.createElement("span");
        const dist = 14 + (i % 2) * 6;
        px.className = "pixel-burst";
        px.style.left = `${e.clientX - 3}px`;
        px.style.top = `${e.clientY - 3}px`;
        px.style.background = COLORS[i % COLORS.length];
        px.style.setProperty("--dx", `${dx * dist}px`);
        px.style.setProperty("--dy", `${dy * dist}px`);
        px.addEventListener("animationend", () => px.remove(), { once: true });
        document.body.appendChild(px);
      });
    };

    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}
