"use client";

import { Briefcase, Home, Mail, Menu, Moon, ScrollText, Sun, User, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { SpriteSvg } from "./pixel-art/Sprite";
import { monitorLogo, palette } from "./pixel-art/sprites";

const icons = { home: Home, briefcase: Briefcase, scroll: ScrollText, user: User, mail: Mail };

export function Navbar({ basePath = "" }: { basePath?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header
      className={`sticky top-0 z-50 border-b-[3px] transition-colors ${
        scrolled ? "border-line bg-bg/95 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`${basePath}#home`} className="flex items-center gap-2">
          <SpriteSvg map={monitorLogo} palette={{ ...palette, k: "currentColor" }} className="h-8 w-8" label="" />
          <span className="font-pixel text-lg font-bold">
            <span className="text-yellow [text-shadow:2px_2px_0_var(--shadow)]">Dev</span>Chalana
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map(({ href, label, icon }) => {
            const Icon = icons[icon];
            const isActive = active === href && !basePath;
            return (
              <Link
                key={href}
                href={`${basePath}${href}`}
                aria-current={isActive ? "true" : undefined}
                className={`pixel-border pixel-shadow-sm pixel-press flex w-[76px] flex-col items-center gap-1 py-2 font-pixel text-[11px] font-bold ${
                  isActive ? "bg-yellow text-on-accent" : "bg-surface"
                }`}
              >
                <Icon size={18} strokeWidth={2.5} aria-hidden />
                {label}
              </Link>
            );
          })}
          <ThemeButton onClick={toggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeButton onClick={toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="pixel-border pixel-shadow-sm pixel-press bg-yellow p-2 text-on-accent"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-[3px] border-line bg-bg px-4 pb-5 pt-3 md:hidden">
          <ul className="grid gap-3">
            {navLinks.map(({ href, label, icon }) => {
              const Icon = icons[icon];
              return (
                <li key={href}>
                  <Link
                    href={`${basePath}${href}`}
                    onClick={() => setOpen(false)}
                    className={`pixel-border pixel-shadow-sm flex items-center gap-3 px-4 py-3 font-pixel text-sm font-bold ${
                      active === href ? "bg-yellow text-on-accent" : "bg-surface"
                    }`}
                  >
                    <Icon size={18} aria-hidden /> {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

function ThemeButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle dark mode"
      className="pixel-border pixel-shadow-sm pixel-press bg-surface p-2.5"
    >
      <Moon size={20} className="dark:hidden" aria-hidden />
      <Sun size={20} className="hidden dark:block" aria-hidden />
    </button>
  );
}
