export const navAnimation = {
  hidden: {
    opacity: 0,
    y: "-200px",
    x: "-50%",
  },
  show: {
    opacity: 1,
    y: 0,
    x: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const navAnimationPhone = {
  hidden: {
    opacity: 0,
    y: "-200px",
    x: "0%",
  },
  show: {
    opacity: 1,
    y: 0,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const MeniButtonAnimation = {
  hidden: {
    opacity: 0,
    y: "30vh",
    x: "-50%",
  },
  show: {
    opacity: 1,
    y: 0,
    x: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export const textAnimation = {
  hidden: {
    opacity: 0,
    y: "-200px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const backgroundAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "ease",
    },
  },
};

export const mainAnimation = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

export const cardAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardX = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "50%",
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

export const cardY = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: "50%",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export const hideNavItemsVariant = {
  opened: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const mobileMenuVariant = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

export const fadeInVariant = {
  opened: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  closed: { opacity: 0 },
};

export const ulVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

export const liVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const fadeInStart = { opacity: 0 };
export const fadeInEnd = { opacity: 1 };
export const fadeInTransition = { duration: 1 };
