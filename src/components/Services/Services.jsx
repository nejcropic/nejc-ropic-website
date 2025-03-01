import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";
import { categories } from "./ServicesConstants";
import Image from "../../images/logo.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

const Services = forwardRef((props, ref) => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const closeOverlay = () => {
    setSelectedBox(null);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer-services" variants={variants}>
        <p>
          "Inovativne digitalne rešitve,
          <br /> ki optimizirajo vaše delo"
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer-services" variants={variants}>
        <div className="title">
          <img src={Image} alt="" />
          <h1>
            <motion.b whileHover={{ color: "var(--secondaryColor)" }}>
              Pametne
            </motion.b>{" "}
            ideje,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "var(--secondaryColor)" }}>
              povečana
            </motion.b>{" "}
            učinkovitost.
          </h1>
          <button>KAJ POČNEM?</button>
        </div>
      </motion.div>

      {/* New Layout with Three Sections */}
      <div className="listContainer">
        <div className="vertical-layout">
          {/* First Section */}
          <div className="first-section">
            {categories.slice(1, 3).map((item, index) => (
              <motion.div
                className="box small-box"
                key={index}
                onClick={() => handleBoxClick(index + 1)}
                whileHover={{ color: "black", scale: 1.05 }}
              >
                <img src={item.image} alt={item.title} />
                <div className="box-flex">
                  <i className={item.icon}></i>
                  <h2>{item.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Middle Section */}
        <div className="middle-section">
          <motion.div
            className="box large-box"
            onClick={() => handleBoxClick(0)}
            whileHover={{ color: "black", scale: 1.04 }}
          >
            <img src={categories[0].image} alt={categories[0].title} />
            <div className="box-flex">
              <i className={categories[2].icon}></i>
              <h2>{categories[0].title}</h2>
            </div>
          </motion.div>
        </div>

        {/* Last Section */}
        <div className="vertical-layout">
          <div className="last-section">
            {categories.slice(3, 5).map((item, index) => (
              <motion.div
                className="box small-box"
                key={index}
                onClick={() => handleBoxClick(index + 3)}
                whileHover={{ color: "black", scale: 1.05 }}
              >
                <img src={item.image} alt={item.title} />
                <div className="box-flex">
                  <i className={item.icon}></i>
                  <h2>{item.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay with Motion */}
      <AnimatePresence>
        {selectedBox !== null && (
          <motion.div
            className="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeOverlay}
          >
            <div
              className="overlay-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{categories[selectedBox].title}</h2>
              <div className="overlay-flex">
                <img
                  src={categories[selectedBox].image}
                  alt={categories[selectedBox].title}
                  className="overlay-image"
                />
                <ul>
                  {categories[selectedBox].items.map((tech, idx) => (
                    <li key={idx}>
                      {typeof tech === "string" ? (
                        tech
                      ) : (
                        <>
                          <strong>{tech.title}</strong>
                          <ul>
                            {tech.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={closeOverlay}>Zapri</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export default Services;
