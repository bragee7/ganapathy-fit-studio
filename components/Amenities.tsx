import { amenities, amenitiesLabel } from "@/data/amenities";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-16 bg-coal py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="06"
          kicker="AMENITIES"
          title="Made convenient."
          label={amenitiesLabel}
        />

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {amenities.map((a, i) => (
            <Reveal key={a.id} delay={i * 40}>
              <div className="h-full bg-coal p-5 transition-colors duration-200 hover:bg-ink">
                <span className="micro-label text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white">
                  {a.label}
                </p>
                <p className="micro-label mt-2 text-white/35">To be confirmed</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
