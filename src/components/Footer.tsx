import { motion } from "framer-motion";
import styles from "./Footer.module.css";

type Props = {
  projektiRef: React.RefObject<HTMLElement>;
  storitveRef: React.RefObject<HTMLElement>;
  kontaktRef: React.RefObject<HTMLElement>;
};

export default function Footer({
  projektiRef,
  storitveRef,
  kontaktRef,
}: Props) {
  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Nejc Ropič</h3>
          <p>
            Spletne, programske in elektrotehniške rešitve za manjša podjetja.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className={styles.links}>
            <button onClick={() => scrollTo(projektiRef)}>Projekti</button>
            <button onClick={() => scrollTo(storitveRef)}>Storitve</button>
            <button onClick={() => scrollTo(kontaktRef)}>Kontakt</button>
          </div>

          <div className={styles.contact}>
            <a href="mailto:nejc@example.com">nejc.ropic@gmail.com</a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} Nejc Ropič. Vse pravice pridržane.
        </span>
      </div>
    </footer>
  );
}
