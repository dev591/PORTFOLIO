"use client";

import { Check, Copy, Download, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PixelButton } from "./ui/PixelButton";
import { PixelCard } from "./ui/PixelCard";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "LinkedIn", value: "in/dev-chalana", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: "dev591", href: profile.github, Icon: GithubIcon },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle kicker="Final Level · Co-op Mode" title="Let's Build Together" />
      <Reveal>
        <PixelCard className="grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6 bg-yellow p-6 text-on-accent sm:p-10 lg:border-r-[3px] lg:border-line">
            <p className="font-display text-xl leading-snug sm:text-2xl">Looking for a Generative AI intern?</p>
            <p className="text-sm leading-relaxed sm:text-base">
              I&apos;m open to internships where I can ship RAG and agentic features to real users. Recruiters and
              founders — my inbox is always open.
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold">
              <MapPin size={16} aria-hidden /> {profile.location}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="pixel-border pixel-shadow-sm pixel-press inline-flex items-center gap-2 bg-surface px-5 py-3 font-pixel text-xs font-bold uppercase text-ink sm:text-sm"
              >
                {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <PixelButton href={profile.resume} variant="accent" target="_blank" download>
                <Download size={16} aria-hidden /> Resume
              </PixelButton>
            </div>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>
          <ul className="flex flex-col">
            {links.map(({ label, value, href, Icon }) => (
              <li key={label} className="border-b-[3px] border-line last:border-b-0">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-yellow hover:text-on-accent sm:p-6"
                >
                  <span className="pixel-border grid h-11 w-11 shrink-0 place-items-center bg-bg group-hover:bg-surface">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-pixel text-xs font-bold uppercase text-muted group-hover:text-on-accent">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-semibold sm:text-base">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </PixelCard>
      </Reveal>
    </section>
  );
}
