import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const links = [
  {
    id: 0,
    title: "Storitve",
    ref: "storitveRef",
  },
  {
    id: 2,
    title: "Projekti",
    ref: "projektiRef",
  },
  {
    id: 3,
    title: "Kontakt",
    ref: "kontaktRef",
  },
];

const Links = ({ refs, setOpen }) => {
  const scrollToRef = (refName) => {
    const ref = refs[refName];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setOpen(false); // Close the sidebar
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {links.map((item) => (
        <motion.div
          key={item.id}
          onClick={() => scrollToRef(item.ref)}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="#">{item.title}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
