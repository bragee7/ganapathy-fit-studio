export type TrainerProfile = {
  id: string;
  role: string;
  monogram: string;
  focus: string[];
  placeholder: boolean;
};

export const trainers: TrainerProfile[] = [
  {
    id: "head-coach",
    role: "HEAD FITNESS COACH",
    monogram: "HC",
    focus: ["Strength", "Beginner onboarding", "Programming"],
    placeholder: true,
  },
  {
    id: "womens-coach",
    role: "WOMEN'S FITNESS COACH",
    monogram: "WC",
    focus: ["Strength", "Mobility", "Conditioning", "Women's fitness"],
    placeholder: true,
  },
  {
    id: "functional-coach",
    role: "FUNCTIONAL TRAINING COACH",
    monogram: "FC",
    focus: ["HIIT", "Circuit", "Mobility", "Athletic conditioning"],
    placeholder: true,
  },
];

export type PTPlan = {
  id: string;
  name: string;
  note: string;
};

export const ptPlans: PTPlan[] = [
  { id: "pt-8", name: "8 SESSIONS", note: "Starter PT block" },
  { id: "pt-12", name: "12 SESSIONS", note: "Focused progress block" },
  { id: "pt-24", name: "24 SESSIONS", note: "Full transformation block" },
  { id: "pt-couple", name: "COUPLE PT", note: "Train together, twice the drive" },
];

export const trainersLabel =
  "PLACEHOLDER PROFILES — ACTUAL DETAILS TO BE PROVIDED.";
