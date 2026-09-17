export const site = {
  name: "Ganapathy Fit Studio",
  tagline: "FITNESS · STRENGTH · CONFIDENCE",
  description:
    "Premium neighbourhood fitness centre in Ganapathy Nagar, Tiruchirappalli offering strength training, cardio, functional fitness and personal training.",
  phoneDisplay: "+91 94439 55620",
  phoneRaw: "+919443955620",
  phoneLabel:
    "PLACEHOLDER — CURRENT LISTING DETAIL. VERIFY BEFORE PRODUCTION.",
  address: {
    line1: "11/7, Ariyamangalam Area",
    line2: "Ganapathy Nagar",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    pincode: "620010",
    country: "India",
  },
  geo: { lat: 10.8087981, lng: 78.7289075 },
  mapsEmbed:
    "https://www.google.com/maps?q=10.8087981,78.7289075&z=17&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=10.8087981,78.7289075",
  hours: [
    { days: "Monday – Saturday", time: "05:30 – 21:30" },
    { days: "Sunday", time: "06:00 – 12:00" },
  ],
  hoursLabel: "PROPOSED HOURS — VERIFY BEFORE PUBLICATION.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Equipment", href: "#equipment" },
    { label: "Classes", href: "#classes" },
    { label: "Membership", href: "#membership" },
    { label: "Trainers", href: "#trainers" },
    { label: "Contact", href: "#contact" },
  ],
  // Centralized image registry — swap URLs to /public/images paths in one edit.
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
      alt: "Dark, cinematic gym floor with strength training equipment",
    },
    about: {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop",
      alt: "Athlete training with barbell in a dark gym",
    },
    classes: {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
      alt: "Dumbbells racked on gym storage",
    },
    membership: {
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop",
      alt: "Person exercising in a gym",
    },
    contact: {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
      alt: "Gym interior with equipment in low light",
    },
  },
} as const;

export type Site = typeof site;
