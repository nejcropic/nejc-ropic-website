import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-button-up">
          <button onClick={handleScrollToTop}>
            <i className="fa-solid fa-sort-up"></i>
          </button>
        </div>
        <div className="footer-copyrights">
          <p>@2024 Nejc Ropič</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
