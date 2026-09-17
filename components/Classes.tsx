import { classes, classesLabel } from "@/data/classes";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Classes() {
  return (
    <section id="classes" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          kicker="GROUP FITNESS"
          title="Train together."
          label={classesLabel}
        />

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <article className="group flex h-full flex-col bg-ink p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-coal">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl uppercase leading-tight text-white">
                    {c.name}
                  </h3>
                  <span className="font-display text-2xl text-lime">
                    {c.time}
                  </span>
                </div>
                <p className="micro-label mt-3 text-white/50">{c.days}</p>
                <p className="micro-label mt-1 text-lime/80">{c.focus}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {c.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
