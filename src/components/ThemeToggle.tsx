import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <motion.div
        className={styles.circle}
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        animate={{ x: isDark ? 28 : 0 }}
      />
    </button>
  );
}
