import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import "../styles/SilesianPhoenix.css";
import obraz from "../img/sprite.png";
import { motion } from "framer-motion";
function SilesianPhoenix() {
  const [progress, setProgress] = useState();
  var test = Math.floor(progress * 47);
  console.log("test");


  const canvasRef = useRef(null);

  const draw = (ctx, image) => {
    if (isNaN(test)) {
      ctx.drawImage(image, 0, 0, 1280, 725, -200, 500, 1280, 725);
    } else {
      ctx.drawImage(image, 0, 725 * test, 1280, 725, -200, 500, 1280, 725);
    }
  };
  useEffect(() => {

    const canvas = canvasRef.current;
    var context = canvas.getContext("2d");

    canvas.height = 1200 * 2;
    canvas.width = 800 * 2;
    var img = new Image();
    img.src = `${obraz}`;

    img.onload = function () {
      draw(context, img);
      console.log("xd");
    };
  }, [draw]);

  return (
    <motion.div
      className="silesianPhoenix"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="parallaxPage" >
        <p>
          Silesian Phoenix to drużyna, którą tworzą studenci należący do
          międzywydziałowego SKN Zastosowania Metod Sztucznej Inteligencji AI -
          METH. Zespół prowadzi prace nad wielozadaniową autonomiczną platformą
          mobilną. Jednym z jej zastosowań jest jednostka marsjańska - łazik
          marsjański. Ta część projektu tworzona jest z myślą o braniu udział w
          międzynarodowych zawodach European Rover Challenge.
        </p>
        <canvas className="lazikTest" ref={canvasRef}></canvas>
      </div>

      <Parallax
        className="parallax"
        onProgressChange={(progress) => {
          setProgress(progress);
        }}
      ></Parallax>
    </motion.div>
  );
}
export default SilesianPhoenix;
