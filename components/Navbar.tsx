"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-hairline backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-ink/95" : "bg-ink/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ganapathy Fit Studio — home">
          <span className="flex h-9 w-9 items-center justify-center bg-lime font-display text-sm text-ink">
            GF
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm uppercase tracking-wide text-white">
              Ganapathy Fit Studio
            </span>
            <span className="micro-label block text-white/50">
              Fitness · Strength · Confidence
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            className="inline-flex min-h-[36px] items-center bg-lime px-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
          >
            Join Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-hairline bg-ink transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-[48px] items-center border-b border-hairline text-sm font-semibold uppercase tracking-[0.14em] text-white/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            className="mt-4 flex min-h-[48px] items-center justify-center bg-lime text-sm font-bold uppercase tracking-[0.18em] text-ink"
            onClick={() => setOpen(false)}
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
}
