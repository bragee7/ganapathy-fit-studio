import { site } from "@/data/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-lime font-display text-sm text-ink">
                GF
              </span>
              <span className="font-display text-sm uppercase tracking-wide text-white">
                Ganapathy Fit Studio
              </span>
            </div>
            <p className="micro-label mt-4 text-white/45">{site.tagline}</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/40">
              Demo website — business details should be verified before
              production publication.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="micro-label mb-4 text-lime">Quick Links</p>
            <ul className="space-y-2.5">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="micro-label mb-4 text-lime">Visit</p>
            <address className="text-xs not-italic leading-relaxed text-white/60">
              {site.address.line1}, {site.address.line2},
              <br />
              {site.address.city}, {site.address.state} {site.address.pincode},{" "}
              {site.address.country}
            </address>
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-3 block text-xs font-semibold text-white/70 transition-colors hover:text-lime"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs uppercase tracking-[0.14em] text-lime transition-colors hover:text-white"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-hairline pt-6 text-[11px] text-white/35">
          © 2026 Ganapathy Fit Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
