import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { DeskScene } from "./pixel-art/scenes";
import { PixelButton } from "./ui/PixelButton";
import { PixelBadge } from "./ui/PixelCard";

export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
      <div className="enter-left">
        <PixelBadge tone="yellow" className="mb-6 px-4 py-2 text-xs">
          Player 1 · {profile.name}
        </PixelBadge>
        <h1 className="font-display text-[1.9rem] leading-[1.25] sm:text-5xl sm:leading-[1.2]">
          Building
          <span className="mt-4 block font-pixel text-sm font-bold uppercase tracking-widest text-red sm:text-base">
            production-ready
          </span>
          <span className="block">Agentic</span>
          <span className="block">
            <span className="bg-yellow px-2 text-on-accent">AI</span> Systems
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Hi, I&apos;m {profile.shortName} — a generative AI engineer and B.Tech CSE (Data Science &amp; AI) student at
          NMIMS Hyderabad. I build RAG pipelines and multi-agent systems with LangChain, LangGraph and Google ADK.
          <span className="cursor-blink ml-1 inline-block h-5 w-2.5 translate-y-1 bg-ink" aria-hidden />
        </p>
        <p className="mt-4 font-pixel text-sm font-bold text-ink">
          ▶ Open to a <span className="text-red">{profile.lookingFor}</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PixelButton href="#projects">
            View My Work <ArrowRight size={16} aria-hidden />
          </PixelButton>
          <PixelButton href={profile.resume} variant="secondary" target="_blank" download>
            <Download size={16} aria-hidden /> Resume
          </PixelButton>
        </div>
        <dl className="mt-10 flex flex-wrap gap-6">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl">{s.value}</dd>
              <dd className="mt-1 font-pixel text-xs font-bold uppercase text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="enter-pop relative mx-2 sm:mx-6">
        <div className="pixel-border pixel-shadow aspect-[4/3] overflow-hidden bg-surface">
          <DeskScene />
        </div>
        <PixelBadge tone="red" className="pixel-shadow-sm absolute -right-3 -top-5 px-4 py-3 text-xs sm:-right-6">
          SIH 2026 · Internal Winner
        </PixelBadge>
        <PixelBadge tone="plain" className="pixel-shadow-sm absolute -bottom-5 -left-3 px-4 py-3 text-xs sm:-left-6">
          IIT Mandi Certified
        </PixelBadge>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="col-span-full mx-auto mt-4 hidden items-center gap-1.5 lg:flex"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 bg-ink" />
        ))}
        <span className="mx-1 h-2.5 w-24 bg-yellow pixel-border" />
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 bg-ink" />
        ))}
      </a>
    </section>
  );
}
