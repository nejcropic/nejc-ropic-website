import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";

type Props = {
  kontaktRef: React.RefObject<HTMLElement>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesSection({ kontaktRef }: Props) {
  const scrollToContact = () => {
    if (kontaktRef.current) {
      window.scrollTo({
        top: kontaktRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Storitve</h2>
          <p>
            Digitalne in tehnične rešitve za manjša podjetja in lokalne
            projekte.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className={styles.grid}>
          <ServiceCard
            title="Spletne strani"
            description="Predstavitvene in poslovne spletne strani za manjša podjetja."
            items={[
              "One-page ali večstranske strani",
              "Prilagojene mobilnim napravam",
              "Pregledna struktura in jasna komunikacija",
              "Funkcionalnost in enostavna uporaba",
            ]}
          />

          <ServiceCard
            title="Programske rešitve"
            description="Prilagojene aplikacije in avtomatizacija procesov."
            items={[
              "Python aplikacije",
              "Interna orodja za podjetja",
              "Povezava s strojno opremo",
              "Optimizacija ponavljajočih nalog",
            ]}
          />

          <ServiceCard
            title="Elektrotehniški razvoj"
            description="Razvoj manjših elektronskih sistemov in prototipov."
            items={[
              "Krmilni moduli",
              "Razvoj in testiranje vezij",
              "Integracija z programsko opremo",
              "Podpora pri tehničnih projektih",
            ]}
          />
        </div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Imate idejo ali projekt?</h3>
          <p>
            Poveživa znanje programiranja in elektrotehnike v praktično rešitev.
          </p>
          <button onClick={scrollToContact}>Kontakt</button>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   SERVICE CARD
========================= */

function ServiceCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className={styles.cardGlow} />
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
