import { ptPlans, trainers, trainersLabel } from "@/data/trainers";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Badge from "./Badge";

export default function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="05"
          kicker="PERSONAL TRAINING"
          title="Your team."
          label={trainersLabel}
        />

        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {trainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article className="flex h-full flex-col bg-ink p-6 transition-colors duration-200 hover:bg-coal sm:p-7">
                <div className="flex h-20 w-20 items-center justify-center border border-white/20 font-display text-2xl text-white/80">
                  {t.monogram}
                </div>
                <h3 className="mt-5 font-display text-xl uppercase text-white">
                  {t.role}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.focus.map((f) => (
                    <li key={f}>
                      <Badge>{f}</Badge>
                    </li>
                  ))}
                </ul>
                <p className="micro-label mt-auto pt-5 text-white/40">
                  Placeholder profile — details to be provided
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border border-hairline bg-coal p-6 sm:p-8">
            <h3 className="micro-label mb-5 text-lime">PT Packages — demo structure</h3>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {ptPlans.map((p) => (
                <li key={p.id} className="bg-coal p-5">
                  <p className="font-display text-lg uppercase text-white">
                    {p.name}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{p.note}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="#contact" variant="outline">
                Ask About Coaching →
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
