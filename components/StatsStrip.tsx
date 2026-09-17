const stats = [
  {
    value: "4+",
    label: "Training Zones",
    note: "Cardio, strength, functional and specialty areas",
  },
  {
    value: "1:1",
    label: "Personal Coaching",
    note: "Individual attention from qualified trainers",
  },
  {
    value: "2–3",
    label: "Fitness Levels Supported",
    note: "From first-timers to experienced lifters",
  },
  {
    value: "Trichy",
    label: "Local Community",
    note: "Proudly serving Ganapathy Nagar and Ariyamangalam",
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-lime" aria-label="Studio highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-8 sm:px-8 sm:py-10 ${
              i % 2 === 1 ? "border-l border-ink/15" : ""
            } ${i >= 2 ? "border-t border-ink/15 lg:border-t-0" : ""} ${
              i === 2 ? "lg:border-l" : ""
            }`}
          >
            <p className="font-display text-4xl uppercase text-ink sm:text-5xl">
              {s.value}
            </p>
            <p className="micro-label mt-2 text-ink">{s.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/70">{s.note}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
