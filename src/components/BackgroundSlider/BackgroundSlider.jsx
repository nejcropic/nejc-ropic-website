import React, { useEffect, useState } from "react";
import "./BackgroundSlider.css";
import { motion } from "framer-motion";

const BackgroundSlider = ({ sliderData, sliderDataPhone }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % getData().length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getData = () =>
    window.innerWidth <= 1000 ? sliderDataPhone : sliderData;

  /* const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  }; */

  const goToNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % getData().length);
  };

  const goToPrevious = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + getData().length) % getData().length
    );
  };

  return (
    <div className="slider-show">
      {getData().map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={slide.image} alt={`Slide ${i}`} className="image" />
          <div className="slider-text">
            <p>{slide.title}</p>
          </div>
        </motion.div>
      ))}
      <div className="slider-controls">
        <button onClick={goToPrevious}>
          <i class="fa-solid fa-arrow-left"></i>
          <p>Nazaj</p>
        </button>
        <button onClick={goToNext}>
          <p>Naprej</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
