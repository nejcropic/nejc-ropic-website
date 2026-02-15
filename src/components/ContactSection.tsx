import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Napaka pri pošiljanju.");
    }

    setLoading(false);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Kontakt</h2>
          <p>
            Imate projekt ali idejo? Pošljite sporočilo in se dogovoriva za
            naslednji korak.
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <FloatingInput
            label="Ime"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <FloatingInput
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <FloatingTextarea
            label="Sporočilo"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Pošiljam..." : "Pošlji sporočilo"}
          </button>
        </motion.form>
      </div>

      {/* THANK YOU OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSuccess(false)}
          >
            <motion.div
              className={styles.overlayBox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3>Hvala za sporočilo!</h3>
              <p>Odgovorim v najkrajšem možnem času.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================
   FLOATING INPUT
========================= */

function FloatingInput({ label, name, type = "text", value, onChange }: any) {
  return (
    <div className={styles.floating}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label className={value ? styles.active : ""}>{label}</label>
    </div>
  );
}

function FloatingTextarea({ label, name, value, onChange }: any) {
  return (
    <div className={styles.floating}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        required
      />
      <label className={value ? styles.active : ""}>{label}</label>
    </div>
  );
}
