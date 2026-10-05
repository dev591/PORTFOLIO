import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "accent";

const variants: Record<Variant, string> = {
  primary: "bg-yellow text-on-accent",
  secondary: "bg-surface text-ink",
  accent: "bg-red text-on-red",
};

type Props = ComponentProps<typeof Link> & { variant?: Variant; size?: "sm" | "md" };

export function PixelButton({ variant = "primary", size = "md", className = "", children, ...props }: Props) {
  const sizing = size === "sm" ? "px-3 py-2 text-[11px]" : "px-5 py-3 text-xs sm:text-sm";
  return (
    <Link
      {...props}
      className={`pixel-border pixel-shadow-sm pixel-press inline-flex items-center gap-2 font-pixel font-bold uppercase tracking-wide ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
