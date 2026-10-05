"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

const NAV_OFFSET = -96;

/** Routes same-page "#section" link clicks through Lenis so they glide instead of jumping. */
function AnchorLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.querySelector(decodeURIComponent(url.hash));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(url.hash === "#home" ? 0 : (target as HTMLElement), { offset: NAV_OFFSET });
      history.replaceState(null, "", url.hash);
    };
    // Capture phase so we win over next/link's own hash scrolling.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1 }}>
      <AnchorLinks />
      {children}
    </ReactLenis>
  );
}
