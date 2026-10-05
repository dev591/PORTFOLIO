import { achievements } from "@/data/portfolio";
import { SpriteSvg } from "./pixel-art/Sprite";
import { palette, scroll, trophy } from "./pixel-art/sprites";
import { PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Level 4 · Badges Unlocked" title="Achievements" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.08}>
            <PixelCard className="flex h-full items-center gap-4 p-4">
              <div className={`pixel-border grid h-16 w-16 shrink-0 place-items-center ${a.kind === "trophy" ? "bg-yellow" : "bg-bg"}`}>
                <SpriteSvg
                  map={a.kind === "trophy" ? trophy : scroll}
                  palette={palette}
                  className="h-10 w-10"
                  label={a.kind === "trophy" ? "Trophy" : "Certificate"}
                />
              </div>
              <div>
                <h3 className="font-pixel text-sm font-bold leading-snug">{a.title}</h3>
                <p className="mt-1 text-xs text-muted sm:text-sm">{a.detail}</p>
              </div>
            </PixelCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
