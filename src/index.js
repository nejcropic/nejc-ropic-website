import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// Import Images - Lazy loaded later
import Logo from "./images/logo.png"; // Critical image (preload)
import JozePhone from "./images/joze_phone.png";
import ToplarPhone from "./images/toplar_phone.png";
import UMSPhone from "./images/ums_phone.png";
import DvojcekPhone from "./images/joze_phone.png";

// Import Gallery - Lazy loaded later
import Diplomska1 from "./images/diplomska_1.jpg";
import Diplomska2 from "./images/diplomska_2.jpg";
import Diplomska3 from "./images/diplomska_3.jpg";
import Diplomska4 from "./images/diplomska_4.jpg";
import DiplomskaVideo1 from "./images/diplomska_video1.mp4";

// Import Icons
import Html from "./icons/html.png";
import Css from "./icons/social.png";
import ReactJs from "./icons/atom.png";
import Python from "./icons/python.png";

// ✅ Preload Critical Images (Hero Section, Logo)
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

preloadImage(Logo); // Preload Logo
preloadImage(require("./images/comp_python.png")); // Preload Hero Section Image
preloadImage(require("./images/phone_ums.png")); // Preload Hero Section Image

// ✅ Lazy Load Other Images
const lazyImages = [
  JozePhone,
  ToplarPhone,
  UMSPhone,
  DvojcekPhone,
  Diplomska1,
  Diplomska2,
  Diplomska3,
  Diplomska4,
  DiplomskaVideo1,
  Html,
  Css,
  ReactJs,
  Python,
];

lazyImages.forEach((imageSrc) => {
  const img = new Image();
  img.src = imageSrc;
  img.loading = "lazy";
});

// ✅ Export for Use in Components
export {
  Logo,
  JozePhone,
  ToplarPhone,
  UMSPhone,
  DvojcekPhone,
  Diplomska1,
  Diplomska2,
  Diplomska3,
  Diplomska4,
  DiplomskaVideo1,
  Html,
  Css,
  ReactJs,
  Python,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
