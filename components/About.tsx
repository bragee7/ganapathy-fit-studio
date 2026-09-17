import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const philosophy = [
  "MOVE BETTER.",
  "GET STRONGER.",
  "STAY CONSISTENT.",
  "LIVE HEALTHIER.",
];

const features = [
  {
    title: "Beginner-friendly onboarding",
    desc: "A structured, welcoming start for every new member.",
  },
  {
    title: "Professional trainer guidance",
    desc: "Coached support on the floor, whenever you need it.",
  },
  {
    title: "Strength training",
    desc: "Free weights and machines for progressive overload.",
  },
  {
    title: "Cardio",
    desc: "Treadmills, bikes, cross trainers and rowers.",
  },
  {
    title: "Functional fitness",
    desc: "Movement-based training for everyday capability.",
  },
  {
    title: "Personal training",
    desc: "One-to-one coaching built around your goals.",
  },
  {
    title: "Progress tracking",
    desc: "Assessments that keep your improvement visible.",
  },
  {
    title: "Supportive community",
    desc: "Train alongside people who show up for each other.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          kicker="ABOUT"
          title={
            <>
              Built for real people.
              <br />
              Built for consistency.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5">
              <ul className="space-y-3">
                {philosophy.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-4 border-b border-hairline pb-3"
                  >
                    <span
                      className="inline-block h-2 w-2 shrink-0 bg-lime"
                      aria-hidden="true"
                    />
                    <span className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-white/60">
                Ganapathy Fit Studio is a neighbourhood gym for Ganapathy Nagar,
                Ariyamangalam and the wider Trichy community — built around
                consistent training, professional guidance and results that
                last. Demo website; verify all details before publication.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="group bg-ink p-5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-white">
                    {f.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                    {f.desc}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
