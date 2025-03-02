import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// Import Images
import Logo from "./images/logo.png"; // Critical image (preload)
import JozePhone from "./images/joze_phone.png"; // Lazy loaded later
import ToplarPhone from "./images/toplar_phone.png"; // Lazy loaded later
import UMSPhone from "./images/ums_phone.png"; // Lazy loaded later
import DvojcekPhone from "./images/joze_phone.png"; // Lazy loaded later
/* import JozeComp from "./images/joze_comp.png"; // Lazy loaded later
import ToplarComp from "./images/toplar_comp.png"; // Lazy loaded later
import UMSComp from "./images/ums_comp.png"; // Lazy loaded later
import DvojcekComp from "./images/dvojcek_comp.png"; // Lazy loaded later
 */
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
  /* JozeComp,
  ToplarComp,
  UMSComp,
  DvojcekComp, */
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
  /* JozeComp,
  ToplarComp,
  UMSComp,
  DvojcekComp, */
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
