// ScrollContext.js
import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Define refs for different sections
  const enoteRef = useRef(null);
  const kontaktniRef = useRef(null);
  const tlorisRef = useRef(null);
  const fasadaRef = useRef(null);
  const okolicaRef = useRef(null);
  const strehaRef = useRef(null);
  const lokacijaRef = useRef(null);

  const value = {
    enoteRef,
    kontaktniRef,
    tlorisRef,
    fasadaRef,
    okolicaRef,
    strehaRef,
    lokacijaRef,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
