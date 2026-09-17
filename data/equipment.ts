export type EquipmentCategory = {
  id: string;
  index: string;
  title: string;
  note: string;
  items: string[];
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "cardio",
    index: "01",
    title: "CARDIO",
    note: "Steady-state and interval conditioning.",
    items: [
      "Treadmills",
      "Cross trainers",
      "Exercise bikes",
      "Spin bikes",
      "Rowing machines",
    ],
  },
  {
    id: "strength",
    index: "02",
    title: "STRENGTH",
    note: "Free weights and machines for progressive overload.",
    items: [
      "Dumbbells",
      "Barbells",
      "Benches",
      "Squat racks",
      "Cable crossover",
      "Smith machine",
      "Leg press",
      "Chest press",
      "Shoulder press",
      "Lat pulldown",
      "Leg curl / leg extension",
    ],
  },
  {
    id: "functional",
    index: "03",
    title: "FUNCTIONAL",
    note: "Movement-based training tools.",
    items: [
      "Kettlebells",
      "Battle ropes",
      "Medicine balls",
      "Resistance bands",
      "Plyometric boxes",
      "Open training floor",
    ],
  },
  {
    id: "specialty",
    index: "04",
    title: "SPECIALTY",
    note: "Dedicated zones and optional focus areas.",
    items: [
      "Mobility area",
      "Personal training zone",
      "Stretching area",
      "Optional women-focused training area",
    ],
  },
];

export const equipmentLabel = "PROPOSED EQUIPMENT LIST — VERIFY BEFORE PUBLICATION.";
