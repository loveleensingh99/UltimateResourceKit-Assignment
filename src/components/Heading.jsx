import React from "react";

const styles = {
  common: "font-semibold text-primary-black tracking-wide !leading-snug",
};

export const H1 = ({ text, className = "", mobileSize, children }) => (
  <h1
    className={`${
      mobileSize ? mobileSize : "text-4xl"
    } xl:text-6xl 2xl:text-7xl ${styles.common} ${className} `}
  >
    {text || children}
  </h1>
);

export const H2 = ({ text, className = "", mobileSize, children }) => (
  <h2
    className={`${mobileSize ? mobileSize : "text-3xl"} xl:text-4xl ${
      styles.common
    } ${className} `}
  >
    {text || children}
  </h2>
);

export const H3 = ({ text, className = "", mobileSize, children }) => (
  <h3
    className={`${mobileSize ? mobileSize : "text-2xl"} xl:text-3xl ${
      styles.common
    } ${className} `}
  >
    {text || children}
  </h3>
);

export const H4 = ({ text, className = "", mobileSize, children }) => (
  <h4
    className={`${mobileSize ? mobileSize : "text-xl"} xl:text-2xl ${
      styles.common
    } ${className} `}
  >
    {text || children}
  </h4>
);

export const H5 = ({ text, mobileSize, className, children }) => (
  <h5
    className={`${mobileSize ? mobileSize : "text-lg"} xl:text-xl ${
      styles.common
    } ${className} `}
  >
    {text || children}
  </h5>
);
export const H6 = ({ text, mobileSize, className = "", children }) => (
  <h5
    className={`${mobileSize ? mobileSize : "text-base"} xl:text-lg ${
      styles.common
    } ${className} `}
  >
    {text || children}
  </h5>
);
