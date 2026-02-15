import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

type SectionRefs = {
  homeRef: React.RefObject<HTMLElement>;
  projektiRef: React.RefObject<HTMLElement>;
  storitveRef: React.RefObject<HTMLElement>;
  kontaktRef: React.RefObject<HTMLElement>;
};

type Props = {
  sections: SectionRefs;
};

export default function Navbar({ sections }: Props) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* =============================
     SCROLL HIDE + BACKGROUND
  ============================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);
      setHidden(current > lastScroll.current && current > 120);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =============================
     ACTIVE SECTION DETECTION
  ============================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const links = [
    { id: "home", label: "Domov", ref: sections.homeRef },
    { id: "projekti", label: "Projekti", ref: sections.projektiRef },
    { id: "storitve", label: "Storitve", ref: sections.storitveRef },
    { id: "kontakt", label: "Kontakt", ref: sections.kontaktRef },
  ];

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.inner}>
          {/* LOGO */}
          <div
            className={styles.logo}
            onClick={() => scrollTo(sections.homeRef)}
          >
            Nejc Ropič
          </div>

          {/* DESKTOP LINKS */}
          <div className={styles.links}>
            {links.map((link) => (
              <MagneticLink
                key={link.id}
                active={active === link.id}
                onClick={() => scrollTo(link.ref)}
              >
                {link.label}
              </MagneticLink>
            ))}
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <ThemeToggle />

            {/* HAMBURGER */}
            <div
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background fade */}
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide panel */}
            <motion.div
              className={styles.mobilePanel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className={styles.mobileLinksWrapper}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                {links.map((link) => (
                  <motion.div
                    key={link.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    onClick={() => scrollTo(link.ref)}
                    className={styles.mobileLink}
                  >
                    {link.label}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* =============================
   MAGNETIC LINK COMPONENT
============================= */

function MagneticLink({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <div
      ref={ref}
      className={`${styles.link} ${active ? styles.active : ""}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
      {active && (
        <motion.div layoutId="underline" className={styles.underline} />
      )}
    </div>
  );
}
