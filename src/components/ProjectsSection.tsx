import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectsSection.module.css";

/* === IMAGES === */
import toplarImg from "../assets/toplar_comp.png";
import podPodomImg from "../assets/pod_podom_sub.png";
import urejanjeImg from "../assets/urejanje_comp.png";
import breceljImg from "../assets/brecelj_sub.png";
import umsImg from "../assets/ums_comp.png";
import houseImg from "../assets/dvojcek_comp.png";
import spImg from "../assets/joze_comp.png";

/* TECH IMAGES */
import moduleMainImg from "../assets/modul_main.png";
import moduleSchematicImg from "../assets/module_named.png";
import moduleUpImg from "../assets/modul_up.png";
import robotImg from "../assets/modul_fixed.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

type TechImage = {
  image: string;
  title: string;
  caption: string;
  specs: string[];
};

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  status: string;
  link?: string;
  large?: boolean;
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

  /* ---------- TECH CAROUSEL ---------- */
  const techImages: TechImage[] = [
    {
      image: moduleMainImg,
      title: "Krmilni modul",
      caption: "Modularno ohišje in integracija elektronike",
      specs: ["UART", "PWM"],
    },
    {
      image: moduleUpImg,
      title: "Sestava vezja",
      caption: "Sestava vezja",
      specs: ["RPi", "Gyroscope", "Buck Converter"],
    },
    {
      image: robotImg,
      title: "Montaža",
      caption: "Montaža na mobilno platformo",
      specs: ["Ogrodje", "3D tisk"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  /* Dynamic constraints */
  useEffect(() => {
    if (!containerRef.current) return;

    const update = () => {
      const container = containerRef.current!;
      const scrollWidth = container.scrollWidth;
      const offsetWidth = container.offsetWidth;

      const maxDrag = scrollWidth - offsetWidth;

      setConstraints({
        left: -maxDrag,
        right: 0,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Snap */
  const snapToNearest = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(`.${styles.techCard}`) as HTMLElement;

    if (!card) return;

    const gap = 30;
    const fullWidth = card.offsetWidth + gap;

    const currentX = x.get();
    let index = Math.round(Math.abs(currentX) / fullWidth);

    index = Math.max(0, Math.min(index, techImages.length - 1));

    const newX = -index * fullWidth;

    animate(x, newX, {
      type: "spring",
      stiffness: 280,
      damping: 30,
    });

    setActiveIndex(index);
  };

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
              description="Sodobna spletna stran z animacijami in poudarkom na UX."
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

        {/* TECH CAROUSEL */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Tehnični projekti</h3>

          <div className={styles.techWrapper}>
            <motion.div
              ref={containerRef}
              className={styles.techScroll}
              drag="x"
              style={{ x }}
              dragConstraints={constraints}
              dragElastic={0.05}
              onDragEnd={snapToNearest}
              whileTap={{ cursor: "grabbing" }}
            >
              {techImages.map((item, index) => (
                <div key={index} className={styles.techCard}>
                  <div className={styles.techImageWrapper}>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className={styles.techContent}>
                    <h4>{item.title}</h4>
                    <p>{item.caption}</p>

                    <div className={styles.specTags}>
                      {item.specs.map((spec, i) => (
                        <span key={i}>{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* DOTS */}
            <div className={styles.techDots}>
              {techImages.map((_, i) => (
                <span
                  key={i}
                  className={i === activeIndex ? styles.activeDot : ""}
                />
              ))}
            </div>
          </div>
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
}: ProjectCardProps) {
  const { ref } = useIntersectionOnce<HTMLDivElement>();

  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${large ? styles.cardLarge : ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      onClick={handleClick}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <p>{description}</p>
        <span className={styles.badge}>{status}</span>
      </div>
    </motion.div>
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
