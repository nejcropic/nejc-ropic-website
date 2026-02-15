import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const homeRef = useRef<HTMLElement>(null);
  const projektiRef = useRef<HTMLElement>(null);
  const storitveRef = useRef<HTMLElement>(null);
  const kontaktRef = useRef<HTMLElement>(null);

  return (
    <>
      <GlobalBackground />
      <Navbar
        sections={{
          homeRef,
          projektiRef,
          storitveRef,
          kontaktRef,
        }}
      />

      <section ref={homeRef}>
        <Hero
          storitveRef={storitveRef}
          projektiRef={projektiRef}
          kontaktRef={kontaktRef}
        />
      </section>

      <section ref={projektiRef}>
        <ProjectsSection />
      </section>
      <section ref={storitveRef}>
        <ServicesSection />
      </section>
      <section ref={kontaktRef}>
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

function GlobalBackground() {
  return <div className="global-bg" />;
}
