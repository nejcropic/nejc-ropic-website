import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import CompPhoto from "../../images/comp_python.png";
import PhonePhoto from "../../images/phone_ums.png";
import arrowDown from "../../icons/arrow-square-down.png";
import NavBar from "../NavBar/NavBar";
import Video from "../../images/background.mp4";
import { Html, Css, ReactJs, Python } from "../../index";

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  scrollButton: {
    opacity: [0, 1, 0],
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
  },
};

const imageVariants = {
  initial: { x: 500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const sliderVariants = {
  initial: { x: "-35%" },
  animate: {
    x: "-65%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const Hero = ({ storitveRef, projektiRef, kontaktRef }) => {
  const scrollToRef = (ref, offset = 20) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  // Scroll-based Background Animation
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="hero">
      {/* Scroll-sensitive background */}
      <motion.div className="scroll-bg" style={{ y: yTransform }} />

      <NavBar refs={{ storitveRef, projektiRef, kontaktRef }} />

      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NEJC ROPIČ</motion.h2>
          <motion.h1 variants={textVariants}>
            Spletne strani in avtomatizacija
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => scrollToRef(projektiRef)}
            >
              Zadnji projekti
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToRef(kontaktRef)}
            >
              Kontakt
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="imageContainer"
        >
          <img loading="lazy" className="compImg" src={CompPhoto} alt="" />
          <img loading="lazy" className="phoneImg" src={PhonePhoto} alt="" />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <img src={Html} alt="" />
        <img src={Python} alt="" />
        <img src={ReactJs} alt="" />
        <img src={Css} alt="" />
      </motion.div>

      <div className="hero-button-wrapper">
        <motion.button
          className="hero-button"
          variants={textVariants}
          animate="scrollButton"
          onClick={() => scrollToRef(storitveRef)}
        >
          <i className="fa-solid fa-circle-arrow-down"></i>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
