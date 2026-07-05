import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Branches from "@/components/Branches";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Branches />
        <CTAFooter />
      </main>
    </>
  );
}
