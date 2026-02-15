import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";

import CompPhoto from "../assets/comp_python.png";
import PhonePhoto from "../assets/phone_ums.png";
import Html from "../icons/html.png";
import ReactJs from "../icons/atom.png";
import Python from "../icons/python.png";

type Props = {
  storitveRef: React.RefObject<HTMLElement>;
  projektiRef: React.RefObject<HTMLElement>;
  kontaktRef: React.RefObject<HTMLElement>;
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ storitveRef, projektiRef, kontaktRef }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.noise} />

      <div className={styles.inner}>
        {/* TEXT */}
        <motion.div
          className={styles.text}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className={styles.tag}>
            Programerske in elektrotehniške rešitve
          </motion.span>

          <motion.h1 variants={item}>
            Od spletnih strani do tehničnih rešitev.
            <br />
            <span>Praktične, prilagojene rešitve.</span>
          </motion.h1>

          <motion.p variants={item}>
            Spletne strani, programske rešitve in razvoj manjših elektronskih
            sistemov — od ideje do izvedbe.
          </motion.p>

          <motion.div variants={item} className={styles.buttons}>
            <button onClick={() => scrollToRef(projektiRef)}>Projekti</button>
            <button
              className={styles.secondary}
              onClick={() => scrollToRef(kontaktRef)}
            >
              Sodelujva
            </button>
          </motion.div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={CompPhoto}
            alt=""
            className={styles.comp}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <motion.img
            src={PhonePhoto}
            alt=""
            className={styles.phone}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollLine}
        animate={{ height: [20, 40, 20] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollToRef(storitveRef)}
      />
    </section>
  );
}
