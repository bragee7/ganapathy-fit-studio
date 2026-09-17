import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Ganapathy Fit Studio | Gym in Ganapathy Nagar, Trichy",
  description: site.description,
  keywords: [
    "gym in Ariyamangalam",
    "gym in Ganapathy Nagar",
    "fitness centre Tiruchirappalli",
    "personal training Trichy",
    "strength training Trichy",
    "women's fitness Trichy",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Ganapathy Fit Studio | Gym in Ganapathy Nagar, Trichy",
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganapathy Fit Studio | Gym in Ganapathy Nagar, Trichy",
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  name: site.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
  telephone: site.phoneRaw,
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
