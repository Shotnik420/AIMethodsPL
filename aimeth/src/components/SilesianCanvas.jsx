import React, { useEffect, useRef, useState } from "react";
import obrazek from "../img/sprite.png";
import "../styles/SilesianCanvas.css";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
var progressNormalized = 0;
var text1 = 100;
var tescik;
function SilesianCanvas() {
  const [progress, setProgress] = useState();

  progressNormalized = Math.floor(progress * 47);
  text1 = -5 * progressNormalized + 100;
  const canvas = useRef();
  const backgroundRef = useRef();

  const draw = (canvas, background) => {
    const ctx = canvas?.current?.getContext("2d");
    if (!ctx || !background) {
      return;
    }
    ctx.clearRect(0, 0, 1280, 720);
    if (isNaN(progressNormalized)) {
      ctx.drawImage(background, 0, 0, 1280, 720, 0, 0, 1280, 725);
    } else {
      ctx.drawImage(
        background,
        0,
        725 * progressNormalized,
        1280,
        720,
        0,
        0,
        1280,
        725
      );
    }

    // document.querySelector(".silesianText--1").style =
    //   "opacity:" + text1 + "%; top:" + (text1 / 50 + 5) + "vh;";
    textDrawing();
  };

  function textDrawing() {
    if (progressNormalized <= 14) {
      document.querySelector(".silesianText--1").style =
        "opacity: 100%; top: 10vh; ";
    } else if (progressNormalized > 15) {
      document.querySelector(".silesianText--1").style =
        "opacity: 0%; top: 5vh; ";
    }

    if (progressNormalized <= 16) {
      document.querySelector(".silesianText--2--LineContainer").style =
        "left: 50vh; opacity: 0% ";
    } else if (progressNormalized > 16 && progressNormalized <= 38) {
      document.querySelector(".silesianText--2--LineContainer").style =
        "left: 19vh; opacity: 100% ";
    }
    if (progressNormalized > 38) {
      document.querySelector(".silesianText--2--LineContainer").style =
        "left: 50vh; opacity: 0% ";
    }

    if (progressNormalized <= 38) {
      document.querySelector(".silesianText--3").style =
        "opacity: 0%; top: -35vh; ";
    }
    if (progressNormalized > 38) {
      document.querySelector(".silesianText--3").style =
        "opacity: 100%; top: -40vh;";
    }
  }
  useEffect(() => {
    var imgi = new Image();
    imgi.src = `${obrazek}`;

    imgi.onload = () => {
      backgroundRef.current = imgi;
    };
    requestAnimationFrame(animate);
  }, []);

  function animate() {
    if (!canvas.current) {
      return;
    }
    console.log(progress);
    console.log(progressNormalized);

    draw(canvas, backgroundRef.current);
    requestAnimationFrame(animate);
  }

  return (
    <div className="silesianParallax">
      <div className="silesianParallaxSticky">
        {/* {progressNormalized} */}
        <canvas ref={canvas} width={1280} height={720} />
        <div className="silesianText--1">
          <p>
            <b className="white">Silesian</b> <b className="orange">Phoenix </b>{" "}
            to drużyna, którą tworzą studenci należący do międzywydziałowego SKN
            Zastosowania Metod Sztucznej Inteligencji{" "}
            <b className="white">AI - METH</b>. Zespół prowadzi prace nad
            wielozadaniową autonomiczną platformą mobilną. Jednym z jej
            zastosowań jest jednostka marsjańska -{" "}
            <b className="white">łazik marsjański</b>. Ta część projektu
            tworzona jest z myślą o braniu udział w międzynarodowych zawodach{" "}
            <b className="white">European Rover Challenge</b>.
          </p>
        </div>
        <div className="silesianText--2">
          <div className="silesianText--2--LineContainer">
            <div className="silesianText--2--Circle"></div>
            <div className="silesianText--2--Line"></div>
            <div className="silesianText--2--Text">
              Cala powloka <b className="white">Silesian </b>
              <b className="orange">Phoenix</b> jest zrobiona z bardzo lekkiego
              oraz bardzo wytrzymalego materialu jakim jest{" "}
              <b className="white">wlokno weglowe</b>. Dzieki zastosowaniu tego
              materialu lazik wazy zaledwie <b className="orange">[] kg </b> i
              jest zdecydowanie bardziej zwinny i latwiejszy w kontrolii od
              konkurencji.
            </div>
          </div>
        </div>
        <div className="silesianText--3">
          <p>
            Lazik <b className="white">Silesian </b>
            <b className="orange">Phoenix </b>jest odporne na pył, pot i wodę
            (klasa ochrony IP54)<sub>10</sub>.
          </p>
        </div>
      </div>
      <Parallax
        className="canvasParallax"
        onProgressChange={(progress) => {
          setProgress(progress);
        }}
      ></Parallax>
    </div>
  );
}

export default SilesianCanvas;
