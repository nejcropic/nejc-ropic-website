import { useRef, useState, forwardRef } from "react";
import "./Projekti.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import items from "./ProjektiData";
import GalleryModal from "./GalerijaModal";

const Single = ({ item }) => {
  const [showGallery, setShowGallery] = useState(false);

  const handleClick = () => {
    if (item.link) {
      window.open(item.link, "_blank"); // Open link in a new tab
    } else {
      setShowGallery(true); // Open the gallery modal
    }
  };

  return (
    <section className="projekti-section">
      <div className="projekti-container">
        <div className="projekti-wrapper">
          <div className="projekti-imageContainer">
            <img src={item.image} alt="" />
          </div>
          <motion.div className="projekti-textContainer">
            <h2>{item.title}</h2>
            <p>
              Uporabljene tehnologije:
              <ul>
                {item.data.map((tech, index) => (
                  <li key={index}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon"
                    />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </p>
            <button onClick={handleClick}>
              {item.link ? "Obišči stran" : "Poglej galerijo"}
            </button>
          </motion.div>
        </div>
        <div className="timeline-date">{item.date}</div>
      </div>

      {/* Open GalleryModal if there's no link */}
      {showGallery && (
        <GalleryModal
          media={item.media}
          onClose={() => setShowGallery(false)}
        />
      )}
    </section>
  );
};

const Projekti = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref, // This is the external ref from Home.jsx
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Zadnji projekti</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="timeline-line"></div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
});

export default Projekti;
