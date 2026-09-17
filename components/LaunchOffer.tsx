import Container from "./Container";
import VerifyTag from "./VerifyTag";

export default function LaunchOffer() {
  return (
    <section className="bg-lime py-20 sm:py-28" aria-label="Launch offer">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <VerifyTag
              label="Demo / Launch concept — confirm with the gym"
              tone="onLime"
              className="mb-5"
            />
            <h2 className="font-display text-4xl uppercase leading-none text-ink sm:text-6xl lg:text-7xl">
              50 people.
              <br />
              One strong start.
            </h2>
            <p className="mt-5 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-5xl text-ink sm:text-6xl">
                ₹499
              </span>
              <span className="micro-label text-ink">
                Joining fee — first 50 members
              </span>
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Fitness assessment", "Workout consultation", "Nutrition orientation"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 bg-ink"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center bg-ink px-10 text-xs font-bold uppercase tracking-[0.2em] text-lime transition-all hover:-translate-y-0.5 hover:bg-coal"
            >
              Claim the Offer
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
