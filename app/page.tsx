import Navbar from "@/components/Navbar";
import MobileStickyCta from "@/components/MobileStickyCta";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Equipment from "@/components/Equipment";
import Classes from "@/components/Classes";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Amenities from "@/components/Amenities";
import LaunchOffer from "@/components/LaunchOffer";
import Contact from "@/components/Contact";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Equipment />
        <Classes />
        <Membership />
        <Trainers />
        <Amenities />
        <LaunchOffer />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
