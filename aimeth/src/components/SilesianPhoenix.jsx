import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import "../styles/SilesianPhoenix.css";
import obraz from "../img/sprite.png";
import { motion } from "framer-motion";
import SilesianCanvas from "./SilesianCanvas";
import TitleParallax from "./titleParallax";
import SilesianPhoenixAbout from "./SilesianPhoenixAbout";


function SilesianPhoenix() {
  return (
    <motion.div
      className="silesianPhoenix"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleParallax />
      <SilesianCanvas />
      <div className="line" ></div>
      <SilesianPhoenixAbout />

    </motion.div>
  );
}
export default SilesianPhoenix;
