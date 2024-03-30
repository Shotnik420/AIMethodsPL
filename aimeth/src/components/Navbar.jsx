import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Navbar.css";
import { AiFillCaretDown, AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  GiTrackedRobot,
  GiCardboardBoxClosed,
  GiArtificialIntelligence,
} from "react-icons/gi";
import logo from "../img/logo.png";
import { RiMoonClearLine, RiSunFill } from "react-icons/ri";
import { TbDrone } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const { ref: navbarRef, inView: navbarVisibility } = useInView();

  const [projektyOut, setProjektyOut] = useState(false);
  const [darkmode, setDarkmode] = useState(true);

  var test = 13;
  useEffect(() => {
    if (darkmode === false) {
      document.querySelector(".darkmode_slider").style.backgroundColor =
        "white";
      document.querySelector(".kolko").style.marginLeft = "0";
      document.documentElement.style.setProperty("--szary1", "#a3b1b8");
      document.documentElement.style.setProperty("--szary2", "#3b3b3b");
      document.documentElement.style.setProperty("--szary3", "#537294");
      document.documentElement.style.setProperty("--szary4", "#8b8b8b");
      document.documentElement.style.setProperty("--szary5", "#3e6b8f");
      document.documentElement.style.setProperty("--blue1", "#dadada");
      document.documentElement.style.setProperty("--blue2", "#303030");
      document.documentElement.style.setProperty("--blue3", "#5583bd");
      document.documentElement.style.setProperty("--blue4", "#303030");
    } else {
      document.querySelector(".darkmode_slider").style.backgroundColor =
        "rgb(46, 46, 46)";
      document.querySelector(".kolko").style.marginLeft = "25%";
      document.documentElement.style.setProperty("--szary1", "#0c0c0c");
      document.documentElement.style.setProperty("--szary2", "#292929");
      document.documentElement.style.setProperty("--szary3", "#2b2b2c");
      document.documentElement.style.setProperty("--szary4", "#151515");
      document.documentElement.style.setProperty("--szary5", "#3e6b8f");
      document.documentElement.style.setProperty("--blue1", "#266abb");
      document.documentElement.style.setProperty("--blue2", "#88c4e4");
      document.documentElement.style.setProperty("--blue3", "#5583bd");
      document.documentElement.style.setProperty("--blue4", "#72a1da");
    }
  }, [darkmode]);

  return (
    <>
      <div
        onMouseEnter={() => {
          setProjektyOut(true);
        }}
        onMouseLeave={() => {
          setProjektyOut(false);
        }}
        className="rozwijane"
        style={{
          height: !projektyOut ? "0vh" : "30vh",
        }}
      >
        <Link
          onClick={() => {
            setProjektyOut(false);
          }}
          to="/silesianphoenix"
        >
          <div
            className="rozwijaneObject"
            onMouseEnter={() => {
              document.querySelectorAll(".rozwijaneObject")[0].style.color =
                "#f1b04e";
            }}
            onMouseLeave={() => {
              document.querySelectorAll(".rozwijaneObject")[0].style.color =
                "white";
            }}
          >
            <GiTrackedRobot />
            Silesian Phoenix
          </div>
        </Link>
        <Link
          onClick={() => {
            setProjektyOut(false);
          }}
          to="/integralsenso"
          onMouseEnter={() => {
            document.querySelectorAll(".rozwijaneObject")[1].style.color =
              "var(--blue3)";
          }}
          onMouseLeave={() => {
            document.querySelectorAll(".rozwijaneObject")[1].style.color =
              "white";
          }}
        >
          <div className="rozwijaneObject">
            <FaPuzzlePiece />
            Integral Senso
          </div>
        </Link>
        <Link
          onClick={() => {
            setProjektyOut(false);
          }}
          onMouseEnter={() => {
            document.querySelectorAll(".rozwijaneObject")[2].style.color =
              "#7f4ef1";
          }}
          onMouseLeave={() => {
            document.querySelectorAll(".rozwijaneObject")[2].style.color =
              "white";
          }}
          to="/aidiag"
        >
          <div className="rozwijaneObject">
            <GiArtificialIntelligence />
            AI-DIAG
          </div>
        </Link>
        <Link
          onClick={() => {
            setProjektyOut(false);
          }}
          to="/erne"
        >
          <div
            className="rozwijaneObject"
            onMouseEnter={() => {
              document.querySelectorAll(".rozwijaneObject")[3].style.color =
                "yellowgreen";
            }}
            onMouseLeave={() => {
              document.querySelectorAll(".rozwijaneObject")[3].style.color =
                "white";
            }}
          >
            <TbDrone />
            Dron ERDE
          </div>
        </Link>
      </div>
      <div className="navbarRef" ref={navbarRef}></div>
      <div
        className="Navbar"
        style={{
          opacity: test == 1 && !navbarVisibility ? "0" : "1",
        }}
      >
        <Link to="/">
          <div className="logo">
            <img src={logo} />
            <div className="logoName">AI-METH</div>
          </div>
        </Link>
        <div className="navObjects">
          {" "}
          <div
            onMouseEnter={() => {
              setProjektyOut(true);
            }}
            onMouseLeave={() => {
              setProjektyOut(false);
            }}
            className="navObject project"
          >
            <AiOutlineFundProjectionScreen />
            Projekty
            <MdOutlineKeyboardArrowDown />
          </div>
          <Link to="/archiwum">
            <div className="navObject project">
              <GiCardboardBoxClosed />
              Archiwum
            </div>
          </Link>
          {/* <div className="navObject news">Aktualności</div> */}
          <Link to="/aboutUs">
            <div className="navObject about">O nas</div>
          </Link>
          <Link to="/wspolpraca">
            <div className="navObject partnership">Współpraca</div>
          </Link>
          <Link to="/kontakt">
            <div className="navObject contact">Kontakt</div>
          </Link>
          <div
            className="darkmode_slider"
            onClick={() => {
              setDarkmode(!darkmode);
            }}
          >
            {darkmode ? <RiMoonClearLine /> : null}
            <div className="kolko" />
            {darkmode ? null : <RiSunFill style={{ color: "var(--blue3)" }} />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
