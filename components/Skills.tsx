import { skills } from "@/data/portfolio";
import { PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

const headerTones = ["bg-yellow text-on-accent", "bg-red text-on-red", "bg-blue text-white", "bg-green text-on-accent", "bg-purple text-white"];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Level 3 · Inventory" title="Skills" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 0.08} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
            <PixelCard className="h-full">
              <h3 className={`border-b-[3px] border-line px-4 py-3 font-pixel text-sm font-bold uppercase ${headerTones[i % headerTones.length]}`}>
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-2.5 p-4">
                {s.items.map((item) => (
                  <li key={item} className="pixel-border bg-bg px-2.5 py-1.5 text-xs font-semibold sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </PixelCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
