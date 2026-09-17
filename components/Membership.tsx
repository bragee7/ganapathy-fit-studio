import {
  membershipPlans,
  membershipDisclaimer,
  membershipLabel,
} from "@/data/memberships";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Membership() {
  return (
    <section id="membership" className="scroll-mt-16 bg-coal py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          kicker="MEMBERSHIP"
          title="Pick your pace."
          label={membershipLabel}
        />

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {membershipPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 70}>
              <article
                className={`flex h-full flex-col p-6 sm:p-7 ${
                  plan.highlighted
                    ? "bg-lime text-ink"
                    : "bg-coal transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-lg uppercase ${
                      plan.highlighted ? "text-ink" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge ? (
                    <span className="bg-ink px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-lime">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5">
                  <span className="font-display text-4xl">{plan.price}</span>
                  <span
                    className={`ml-1 text-xs ${
                      plan.highlighted ? "text-ink/70" : "text-white/50"
                    }`}
                  >
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-xs leading-relaxed ${
                        plan.highlighted ? "text-ink/85" : "text-white/65"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={
                          plan.highlighted
                            ? "mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-ink"
                            : "mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-lime"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex min-h-[44px] items-center justify-center px-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
                    plan.highlighted
                      ? "bg-ink text-lime hover:bg-coal"
                      : "border border-white/25 text-white hover:border-lime hover:text-lime"
                  }`}
                >
                  Get Started
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/45">{membershipDisclaimer}</p>
      </Container>
    </section>
  );
}
