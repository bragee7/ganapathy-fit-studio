import Image from "next/image";
import { site } from "@/data/site";
import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-16">
      <Image
        src={site.images.hero.src}
        alt={site.images.hero.alt}
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-4rem)] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="micro-label hero-enter hero-enter-1 mb-6 flex items-center gap-3 text-white/60">
              <span className="inline-block h-2 w-2 bg-lime" aria-hidden="true" />
              Ariyamangalam · Ganapathy Nagar · Trichy
            </p>

            <h1 className="font-display text-hero uppercase text-white">
              <span className="hero-enter hero-enter-1 block">
                Train <span className="text-lime">hard.</span>
              </span>
              <span className="hero-enter hero-enter-2 block">
                Live <span className="text-lime">strong.</span>
              </span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-base text-white/70 sm:text-lg">
              Your neighbourhood destination for strength, conditioning and
              better fitness.
            </p>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-4">
              <Button href="#membership">View Memberships</Button>
              <Button href="#contact" variant="outline">
                Book a Visit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="hero-enter hero-enter-4 border border-hairline bg-coal/90 p-6">
              <p className="micro-label mb-3 text-lime">05:30 Morning Sessions</p>
              <p className="text-sm text-white/70">
                Start the day early with dedicated morning training slots.
              </p>
              <p className="micro-label mt-4 border-t border-hairline pt-3 text-white/45">
                Proposed demo schedule. Verify before publication.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
