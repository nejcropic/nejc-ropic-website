import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { motion, useScroll, useTransform } from "framer-motion";
import SideBar from "../SideBar/SideBar";
import GitHub from "../../icons/github.png";
import Facebook from "../../icons/facebook.png";
import LinkedIn from "../../icons/linkedin.png";
import Instagram from "../../icons/instagram.png";
import Logo from "../../assets/logo_cut.png";
function NavBar({ refs }) {
  return (
    <div className="navbar">
      <SideBar refs={refs} />
      <div className="nav-left"></div>
      <div className="navbar-wrapper">
        <div className="social">
          <Link to="https://www.linkedin.com/in/nejc-ropi%C4%8D-a03157205/">
            <img src={LinkedIn} alt="linkedin icon" />
          </Link>
          <Link to="https://github.com/nejcropic">
            <img src={GitHub} alt="github icon" />
          </Link>
          <Link to="https://www.facebook.com/nejc.ropic">
            <img src={Facebook} alt="facebook icon" />
          </Link>
          <Link to="https://www.instagram.com/nejcropic/">
            <img src={Instagram} alt="instagram icon" />
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Logo} alt="" />
        </motion.span>
      </div>
    </div>
  );
}

export default NavBar;
