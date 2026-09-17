export type Amenity = {
  id: string;
  label: string;
};

export const amenities: Amenity[] = [
  { id: "parking", label: "Parking" },
  { id: "lockers", label: "Lockers" },
  { id: "changing", label: "Changing area" },
  { id: "washrooms", label: "Washrooms" },
  { id: "water", label: "Drinking water" },
  { id: "assessment", label: "Fitness assessment" },
  { id: "nutrition", label: "Nutrition guidance" },
  { id: "first-aid", label: "First-aid readiness" },
  { id: "cctv", label: "CCTV / safety" },
  { id: "tracking", label: "Workout tracking" },
];

export const amenitiesLabel =
  "ALL AMENITIES TO BE CONFIRMED WITH THE GYM.";
