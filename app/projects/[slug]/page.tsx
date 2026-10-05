import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectLinks } from "@/components/Projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelBadge, PixelCard } from "@/components/ui/PixelCard";
import { profile, projects } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.tagline} · ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar basePath="/" />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 font-pixel text-sm font-bold hover:text-red">
          <ArrowLeft size={16} aria-hidden /> Back to works
        </Link>

        <PixelCard className="overflow-hidden">
          <ProjectVisual project={project} priority />
          <div className="p-6 sm:p-10">
            {project.badge && (
              <PixelBadge tone="red" className="mb-4">
                {project.badge}
              </PixelBadge>
            )}
            <h1 className="font-display text-2xl leading-snug sm:text-4xl">{project.title}</h1>
            <p className="mt-3 font-pixel text-base font-bold text-muted sm:text-lg">{project.tagline}</p>
            <p className="mt-6 text-base leading-relaxed sm:text-lg">{project.summary}</p>

            <h2 className="mt-10 mb-4 font-pixel text-lg font-bold uppercase">&gt; What I built</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-yellow pixel-border" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 mb-4 font-pixel text-lg font-bold uppercase">&gt; Tech stack</h2>
            <ul className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <li key={t} className="pixel-border bg-bg px-3 py-1.5 text-sm font-semibold">
                  {t}
                </li>
              ))}
            </ul>

            {(project.github || project.demo) && (
              <div className="mt-10 flex flex-wrap gap-4">
                <ProjectLinks project={project} size="md" />
              </div>
            )}
          </div>
        </PixelCard>

        <div className="mt-12 flex justify-end">
          <PixelButton href={`/projects/${next.slug}`} variant="secondary">
            Next: {next.title} <ArrowRight size={16} aria-hidden />
          </PixelButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
