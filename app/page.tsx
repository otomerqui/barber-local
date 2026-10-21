import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Barbers from "@/components/Barbers";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import { services, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.cityState,
    addressCountry: "CO",
  },
  openingHours: site.hours.map((h) => `${h.day}: ${h.time}`),
  priceRange: "$$",
  currenciesAccepted: "COP",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    price: s.price,
    priceCurrency: "COP",
    itemOffered: { "@type": "Service", name: s.name, description: s.shortDesc },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Barbers />
        <Testimonials />
        <Location />
        <Booking />
      </main>
    </>
  );
}
