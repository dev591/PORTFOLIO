import Image from "next/image";
import { education, leadership, profile } from "@/data/portfolio";
import { SpriteSvg } from "./pixel-art/Sprite";
import { avatar, palette } from "./pixel-art/sprites";
import { PixelBadge, PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Level 5 · Character Sheet" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <Reveal>
          <PixelCard className="overflow-hidden">
            <div className="relative aspect-square border-b-[3px] border-line bg-yellow">
              {profile.avatar ? (
                <Image src={profile.avatar} alt={profile.name} fill sizes="320px" className="object-cover" />
              ) : (
                <SpriteSvg map={avatar} palette={palette} className="h-full w-full p-10" label={`Pixel avatar of ${profile.name}`} />
              )}
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 p-5 text-sm">
              <dt className="font-pixel font-bold text-muted">NAME</dt>
              <dd>{profile.name}</dd>
              <dt className="font-pixel font-bold text-muted">CLASS</dt>
              <dd>{profile.role}</dd>
              <dt className="font-pixel font-bold text-muted">BASE</dt>
              <dd>{profile.location}</dd>
              <dt className="font-pixel font-bold text-muted">LANG</dt>
              <dd>English, Hindi</dd>
            </dl>
          </PixelCard>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="text-base leading-relaxed sm:text-lg">{profile.summary}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Currently studying {education.degree} at {education.school} ({education.graduation.toLowerCase()}). I like
              taking features from prototype to production — RAG with grounded citations, agent graphs with guardrails, and
              evaluations that tell you when something broke.
            </p>
          </Reveal>
          <Reveal>
            <h3 className="mb-4 font-pixel text-lg font-bold uppercase">&gt; Guild Roles</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {leadership.map((l) => (
                <PixelCard key={l.role} className="p-5">
                  <PixelBadge tone="purple" className="mb-3">
                    {l.org}
                  </PixelBadge>
                  <h4 className="font-pixel text-sm font-bold">{l.role}</h4>
                  <p className="mt-2 text-sm text-muted">{l.detail}</p>
                </PixelCard>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
