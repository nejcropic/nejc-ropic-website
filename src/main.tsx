import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import Images
import Logo from "./assets/logo.png";
import JozePhone from "./assets/joze_phone.png";
import ToplarPhone from "./assets/toplar_phone.png";
import UMSPhone from "./assets/ums_phone.png";
import DvojcekPhone from "./assets/joze_phone.png";

import Modul_main from "./assets/ohisje_diag.png";
import Modul_montaza from "./assets/sestava.png";
import Modul_zgoraj from "./assets/ohisje_zgoraj.png";
import Uporabniski_vmesnik from "./assets/up_vmesnik.png";
import DiplomskaVideo1 from "./assets/diplomska_video1.mp4";

import Html from "./icons/html.png";
import Css from "./icons/social.png";
import ReactJs from "./icons/atom.png";
import Python from "./icons/python.png";

import CompPython from "./assets/comp_python.png";
import PhoneUMS from "./assets/phone_ums.png";

// ✅ Preload critical images
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

preloadImage(Logo);
preloadImage(CompPython);
preloadImage(PhoneUMS);

// ✅ Lazy load other assets
const lazyImages: string[] = [
  JozePhone,
  ToplarPhone,
  UMSPhone,
  DvojcekPhone,
  Modul_main,
  Modul_montaza,
  Modul_zgoraj,
  DiplomskaVideo1,
  Html,
  Css,
  ReactJs,
  Python,
];

lazyImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Render app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
