export type FitnessClass = {
  id: string;
  name: string;
  time: string;
  days: string;
  focus: string;
  description: string;
};

export const classes: FitnessClass[] = [
  {
    id: "morning-mobility",
    name: "MORNING MOBILITY",
    time: "06:00",
    days: "Mon / Wed / Fri",
    focus: "Mobility · Flexibility · Activation",
    description:
      "Movement prep to wake the body up — joint mobility, flexibility work and muscle activation.",
  },
  {
    id: "womens-fitness",
    name: "WOMEN'S FITNESS",
    time: "07:00",
    days: "Tue / Thu / Sat",
    focus: "Strength · Conditioning · Confidence",
    description:
      "A supportive, coach-led session built around strength, conditioning and confidence.",
  },
  {
    id: "hiit-circuit",
    name: "HIIT CIRCUIT",
    time: "18:30",
    days: "Mon / Wed / Fri",
    focus: "High-intensity · Full-body",
    description:
      "High-intensity interval circuits for a full-body conditioning session.",
  },
  {
    id: "functional-fitness",
    name: "FUNCTIONAL FITNESS",
    time: "19:30",
    days: "Tue / Thu",
    focus: "Movement · Balance · Coordination",
    description:
      "Functional movement patterns that build balance, coordination and everyday strength.",
  },
  {
    id: "strength-basics",
    name: "STRENGTH BASICS",
    time: "20:30",
    days: "Mon / Thu",
    focus: "Lifting fundamentals · Technique",
    description:
      "Lifting fundamentals with progressive resistance — technique first, always.",
  },
  {
    id: "weekend-conditioning",
    name: "WEEKEND CONDITIONING",
    time: "07:00",
    days: "Saturday",
    focus: "Full-body · Coached conditioning",
    description:
      "A coached full-body conditioning session to round off the week strong.",
  },
];

export const classesLabel =
  "ALL CLASS TIMES ARE DEMO / PROPOSED — CONFIRM WITH THE GYM.";
