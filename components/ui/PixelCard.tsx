import type { HTMLAttributes } from "react";

export function PixelCard({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`pixel-border pixel-shadow bg-surface ${className}`}>
      {children}
    </div>
  );
}

const tones = {
  yellow: "bg-yellow text-on-accent",
  red: "bg-red text-on-red",
  blue: "bg-blue text-white",
  green: "bg-green text-on-accent",
  purple: "bg-purple text-white",
  plain: "bg-surface text-ink",
} as const;

export function PixelBadge({
  tone = "yellow",
  className = "",
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`pixel-border inline-flex items-center gap-1.5 px-2.5 py-1 font-pixel text-[11px] font-bold uppercase leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
