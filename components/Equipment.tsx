import { equipmentCategories, equipmentLabel } from "@/data/equipment";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Equipment() {
  return (
    <section id="equipment" className="scroll-mt-16 bg-coal py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          kicker="EQUIPMENT"
          title="The floor."
          label={equipmentLabel}
        />

        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {equipmentCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <article className="group h-full bg-coal p-6 transition-colors duration-200 hover:bg-ink sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-white/15 transition-colors group-hover:text-lime">
                    {cat.index}
                  </span>
                  <h3 className="font-display text-2xl uppercase text-white">
                    {cat.title}
                  </h3>
                </div>
                <p className="micro-label mt-4 text-white/45">{cat.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="border border-white/12 px-2.5 py-1.5 text-xs text-white/70 transition-colors group-hover:border-white/25"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
