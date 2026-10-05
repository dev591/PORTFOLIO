import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="mt-10 border-t-[3px] border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-pixel text-sm font-bold">
          <span className="cursor-blink text-red">▶</span> PRESS <span className="bg-yellow px-1.5 text-on-accent">START</span> TO HIRE {profile.shortName.toUpperCase()}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-red">
            <GithubIcon size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-red">
            <LinkedinIcon size={20} />
          </a>
          <span className="text-xs text-muted">© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
