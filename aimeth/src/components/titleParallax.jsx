//Here is the parallax for Lazik that will go on the top of Silesian Phoenix page:
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

import "../styles/titleParallax.css";

import { motion } from "framer-motion";

export default function TitleParallax() {
  return (
    <motion.div
      className="titleParallax"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallax
        speed={10}
        className="titleParallax--1 titleParallaxObject"
      ></Parallax>
      <div className="parallaxHolder">
        <Parallax speed={-40} className="titleParallaxLogo">
          <div className="logo"></div>
        </Parallax>
        <Parallax
          speed={-40}
          className="titleParallax--2 titleParallaxObject"
        ></Parallax>
        <Parallax
          speed={-50}
          className="titleParallax--3 titleParallaxObject"
        ></Parallax>
        <Parallax
          speed={-60}
          className="titleParallax--4 titleParallaxObject"
        ></Parallax>
        <Parallax
          speed={-70}
          className="titleParallax--5 titleParallaxObject"
        ></Parallax>
      </div>
    </motion.div>
  );
}
