import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Link from "next/link";
import { type Project, projects } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { PixelButton } from "./ui/PixelButton";
import { PixelBadge, PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  return (
    <>
      {project.github && (
        <PixelButton href={project.github} target="_blank" rel="noreferrer" variant="secondary" size={size}>
          <GithubIcon size={14} /> Code
        </PixelButton>
      )}
      {project.demo && (
        <PixelButton href={project.demo} target="_blank" rel="noreferrer" variant="accent" size={size}>
          <ExternalLink size={14} aria-hidden /> Live
        </PixelButton>
      )}
    </>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {tech.map((t) => (
        <li key={t} className="border-2 border-line px-2 py-0.5 text-xs font-medium">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  // The first card is wide; so is the last when it would otherwise sit alone in its row.
  const isWide = (i: number) => i === 0 || (i === featured.length - 1 && featured.length % 2 === 0);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Level 1 · Featured Works" title="Featured Works">
        <p className="max-w-sm text-sm text-muted">Hackathon builds and RAG apps — each one shipped and demoed.</p>
      </SectionTitle>

      <div className="grid gap-10 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1} className={isWide(i) ? "md:col-span-2" : ""}>
            <PixelCard className={`flex h-full flex-col ${isWide(i) ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : ""}`}>
              <div className={isWide(i) ? "lg:border-r-[3px] lg:border-line [&>div]:lg:h-full [&>div]:lg:aspect-auto [&>div]:lg:min-h-64 [&>div]:lg:border-b-0" : ""}>
                <ProjectVisual project={p} priority={i === 0} />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                {p.badge && (
                  <PixelBadge tone={i === 0 ? "red" : "yellow"} className="self-start">
                    {p.badge}
                  </PixelBadge>
                )}
                <div>
                  <h3 className="font-display text-lg leading-snug sm:text-xl">{p.title}</h3>
                  <p className="mt-2 font-pixel text-sm font-bold text-muted">{p.tagline}</p>
                </div>
                <p className="text-sm leading-relaxed">{p.summary}</p>
                <TechChips tech={p.tech} />
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <PixelButton href={`/projects/${p.slug}`} size="sm">
                    Case Study <ArrowRight size={14} aria-hidden />
                  </PixelButton>
                  <ProjectLinks project={p} />
                </div>
              </div>
            </PixelCard>
          </Reveal>
        ))}
      </div>

      {more.length > 0 && (
        <Reveal className="mt-16">
          <h3 className="mb-6 font-pixel text-lg font-bold uppercase">&gt; Side Quests</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <PixelCard key={p.slug} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start">
                <div className="pixel-border w-full shrink-0 overflow-hidden sm:w-40 [&>div]:border-b-0">
                  <ProjectVisual project={p} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Link href={`/projects/${p.slug}`} className="font-pixel text-base font-bold hover:underline">
                    {p.title}
                  </Link>
                  <p className="text-sm text-muted">{p.summary}</p>
                  <TechChips tech={p.tech} />
                  {(p.github || p.demo) && (
                    <div className="mt-2 flex gap-3">
                      <ProjectLinks project={p} />
                    </div>
      )}
              </div>
            </PixelCard>
          ))}
        </div>
      </Reveal>
      )}
    </section>
  );
}
