import { site } from "@/data/site";
import Button from "./Button";
import Container from "./Container";

export default function LocationMap() {
  return (
    <section id="location" className="scroll-mt-16 bg-coal py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="micro-label mb-4 text-lime">Find Us</p>
            <h2 className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">
              Ganapathy Nagar,
              <br />
              Trichy.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {site.address.line1}, {site.address.line2}, {site.address.city},{" "}
              {site.address.state} {site.address.pincode}
            </p>
            <div className="mt-7">
              <Button href={site.mapsDirections} external>
                Get Directions →
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-hairline">
              <iframe
                src={site.mapsEmbed}
                title="Map — Ganapathy Fit Studio, Ganapathy Nagar, Tiruchirappalli"
                className="h-[320px] w-full sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
