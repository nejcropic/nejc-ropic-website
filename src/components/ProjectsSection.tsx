import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "./ProjectsSection.module.css";

/* === IMAGES === */
import toplarImg from "../assets/toplar_comp.png";
import podPodomImg from "../assets/pod_podom_sub.png";
import urejanjeImg from "../assets/urejanje_comp.png";
import breceljImg from "../assets/brecelj_sub.png";
import umsImg from "../assets/ums_comp.png";
import houseImg from "../assets/dvojcek_comp.png";
import spImg from "../assets/joze_comp.png";
import moduleImg from "../assets/ohisje_diag.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================
   INTERSECTION (mobile overlay)
========================= */

function useIntersectionOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* =========================
   MAIN
========================= */

export default function ProjectsSection() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <section
      className={styles.projects}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <div
        className={styles.cursorGlow}
        style={{ left: cursor.x, top: cursor.y }}
      />

      <div className={styles.inner}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Projekti</h2>
          <p>Digitalne in tehnične rešitve v praksi.</p>
        </motion.div>

        {/* WEB PROJECTS */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Spletne rešitve</h3>

          <div className={styles.grid}>
            <ProjectCard
              image={urejanjeImg}
              title="Urejanje vrtov – Janko Pugelj"
              description="Sodobna spletna stran z animacijami, gladkimi prehodi in poudarkom na vizualni predstavitvi storitev."
              status="Aktivno"
              link="https://www.urejanje-vrtov.com/"
              large
            />
            <ProjectCard
              image={toplarImg}
              title="Picerija Toplar"
              description="Spletna stran za gostinsko podjetje."
              status="Aktivno"
              link="https://picerija-toplar.si"
            />

            <ProjectCard
              image={podPodomImg}
              title="Gostišče Pod Podom"
              description="Predstavitvena stran za lokalno gostišče."
              status="Aktivno"
              link="https://gostisce-pod-podom.si"
            />

            <ProjectCard
              image={breceljImg}
              title="Brecelj grafika"
              description="Enostavna poslovna predstavitev."
              status="Aktivno"
              link="https://www.brecelj-pos.eu/"
            />

            <ProjectCard
              image={umsImg}
              title="UMS"
              description="Moj prvi projekt izdelave spletne strani."
              status="Zaključen projekt"
              link="https://www.ums.si/"
            />
          </div>
        </div>

        {/* TECH HIGHLIGHT */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Tehnični projekt</h3>

          <motion.div
            className={styles.techHighlight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img src={moduleImg} alt="Krmilni modul" />

            <div className={styles.techContent}>
              <h4>Modularni senzorski in krmilni modul za mobilnega robota</h4>
              <p>
                Razvoj elektronike, programiranje in testiranje krmilnega modula
                v realnem okolju. Projekt povezuje znanje elektrotehnike in
                programiranja.
              </p>

              <span className={styles.techBadge}>Elektrotehniški projekt</span>
            </div>
          </motion.div>
        </div>

        {/* ARCHIVE */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Zgodnji projekti</h3>

          <div className={styles.gridSmall}>
            <ArchiveCard
              image={houseImg}
              title="Predstavitvena stran za hišo"
              description="Spletna predstavitev nepremičnine."
            />

            <ArchiveCard
              image={spImg}
              title="Stran za lokalni s.p."
              description="Predstavitvena stran za lokalno podjetje."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   PROJECT CARD
========================= */

function ProjectCard({
  image,
  title,
  description,
  status,
  link,
  large = false,
}: {
  image: string;
  title: string;
  description: string;
  status: string;
  link?: string;
  large?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { ref, isVisible } = useIntersectionOnce<HTMLDivElement>();

  useEffect(() => {
    if (isVisible && window.innerWidth < 900) {
      setShowOverlay(true);
      const t = setTimeout(() => setShowOverlay(false), 1500);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  const handleClick = () => {
    if (link) window.open(link, "_blank");
    else setOpen(true);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={`${styles.card} ${large ? styles.cardLarge : ""}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div
          className={`${styles.imageWrapper} ${
            showOverlay ? styles.mobileOverlayActive : ""
          }`}
          onClick={handleClick}
        >
          <img src={image} alt={title} />
          <div className={styles.overlay}>
            <div className={styles.overlayTitle}>{title}</div>
            <div className={styles.responsiveBadge}>Responsive design</div>
          </div>
        </div>

        <div className={styles.cardContent}>
          <h4>{title}</h4>
          <p>{description}</p>
          <span className={styles.badge}>{status}</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <CaseModal
            image={image}
            title={title}
            description={description}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================
   ARCHIVE CARD
========================= */

function ArchiveCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className={styles.archiveCard}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <span className={styles.archiveBadge}>Arhiv</span>
    </motion.div>
  );
}

/* =========================
   MODAL
========================= */

function CaseModal({ image, title, description, onClose }: any) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalPanel}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
}
