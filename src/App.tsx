import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  useGoogleAnalytics();
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
        <ServicesSection kontaktRef={kontaktRef} />
      </section>

      <section ref={kontaktRef}>
        <ContactSection />
      </section>

      <Footer
        projektiRef={projektiRef}
        storitveRef={storitveRef}
        kontaktRef={kontaktRef}
      />
    </>
  );
}

function GlobalBackground() {
  return <div className="global-bg" />;
}

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID;

    if (window.gtag && GA_ID) {
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
