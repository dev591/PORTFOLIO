import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { ProjectScene } from "./pixel-art/scenes";

/** Shows the project's own image when set, otherwise its code-drawn pixel scene. */
export function ProjectVisual({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <div className="relative aspect-video overflow-hidden border-b-[3px] border-line bg-bg">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} — ${project.tagline}`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="pixelated object-cover"
          priority={priority}
        />
      ) : (
        <ProjectScene id={project.scene} />
      )}
    </div>
  );
}
