import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Branches from "@/components/Branches";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";
import MobileActionBar from "@/components/MobileActionBar";
import { ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/contact";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "National Dry Cleaners",
  url: "https://www.ndc.com.pk",
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.replace("Main branch: ", ""),
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "City",
    name: "Lahore",
  },
  openingHours: "Mo-Su 08:00-22:00",
  sameAs: ["https://instagram.com/ndcpakistan"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <Branches />
        <FAQ />
        <CTAFooter />
      </main>
      <MobileActionBar />
    </>
  );
}
