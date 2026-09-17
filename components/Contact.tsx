import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import EnquiryForm from "./EnquiryForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="07"
          kicker="CONTACT"
          title="Let's get you moving."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-lime"
                  aria-hidden="true"
                />
                <div>
                  <p className="micro-label mb-1 text-white/50">Address</p>
                  <p className="text-sm leading-relaxed text-white/85">
                    {site.address.line1}, {site.address.line2},
                    <br />
                    {site.address.city}, {site.address.state}{" "}
                    {site.address.pincode}, {site.address.country}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-lime"
                  aria-hidden="true"
                />
                <div>
                  <p className="micro-label mb-1 text-white/50">Phone</p>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-sm font-semibold text-white/85 transition-colors hover:text-lime"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="micro-label mt-2 max-w-xs leading-relaxed text-white/40">
                    {site.phoneLabel}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0 text-lime"
                  aria-hidden="true"
                />
                <div>
                  <p className="micro-label mb-1 text-white/50">Hours</p>
                  <ul className="space-y-1">
                    {site.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between gap-6 text-sm text-white/85"
                      >
                        <span>{h.days}</span>
                        <span className="text-white/60">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="micro-label mt-2 leading-relaxed text-white/40">
                    {site.hoursLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="micro-label mb-5 text-lime">Enquiry Form</h3>
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
