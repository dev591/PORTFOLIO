import { Reveal } from "./Reveal";

export function SectionTitle({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-3 font-pixel text-xs font-bold uppercase tracking-widest text-red">&gt; {kicker}</p>
        <h2 className="font-display text-2xl leading-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}
