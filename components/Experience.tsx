import { education, experience } from "@/data/portfolio";
import { PixelBadge, PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Level 2 · Quest Log" title="Experience" />
      <ol className="relative ml-3 border-l-[3px] border-dashed border-line pl-8 sm:ml-5 sm:pl-12">
        {experience.map((e, i) => (
          <li key={e.role} className="relative mb-10 last:mb-0">
            <span
              className={`pixel-border absolute -left-[46px] top-5 h-6 w-6 sm:-left-[62px] ${i === 0 ? "bg-yellow" : "bg-red"}`}
              aria-hidden
            />
            <Reveal delay={i * 0.08}>
              <PixelCard className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-pixel text-base font-bold sm:text-lg">{e.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-muted">{e.org}</p>
                  </div>
                  <PixelBadge tone="plain">{e.period}</PixelBadge>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-red" aria-hidden />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </PixelCard>
            </Reveal>
          </li>
        ))}
        <li className="relative">
          <span className="pixel-border absolute -left-[46px] top-5 h-6 w-6 bg-blue sm:-left-[62px]" aria-hidden />
          <Reveal>
            <PixelCard className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-pixel text-base font-bold sm:text-lg">{education.degree}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted">{education.school}</p>
                </div>
                <PixelBadge tone="blue">{education.graduation}</PixelBadge>
              </div>
            </PixelCard>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
