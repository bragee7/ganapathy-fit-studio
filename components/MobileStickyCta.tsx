"use client";

import { useEffect, useState } from "react";

export default function MobileStickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHidden(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-ink/95 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="#membership"
        className="flex min-h-[52px] items-center justify-center bg-lime text-xs font-bold uppercase tracking-[0.18em] text-ink"
      >
        Join Now
      </a>
      <a
        href="#contact"
        className="flex min-h-[52px] items-center justify-center text-xs font-bold uppercase tracking-[0.18em] text-white"
      >
        Book a Visit
      </a>
    </div>
  );
}
