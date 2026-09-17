export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹799",
    period: "/month",
    features: ["Gym access", "Basic trainer guidance", "Initial orientation"],
  },
  {
    id: "plus",
    name: "PLUS",
    price: "₹1,299",
    period: "/month",
    features: [
      "Gym access",
      "Workout plan",
      "Fitness assessment",
      "Selected group classes",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    id: "transformation",
    name: "TRANSFORMATION",
    price: "₹1,999",
    period: "/month",
    features: [
      "Structured coaching",
      "Progress tracking",
      "Training plan",
      "Nutrition orientation",
    ],
  },
  {
    id: "annual",
    name: "ANNUAL",
    price: "₹9,999",
    period: "/year",
    features: [
      "Full gym access",
      "Fitness assessment",
      "Selected classes",
      "Long-term membership value",
    ],
  },
];

export const membershipLabel =
  "INDICATIVE DEMO PRICES — CONFIRM WITH THE GYM.";

export const membershipDisclaimer =
  "Indicative demo pricing. Actual membership pricing, inclusions and terms must be confirmed with the gym.";
