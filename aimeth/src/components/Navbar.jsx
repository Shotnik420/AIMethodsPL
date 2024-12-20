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

  var test = 13;

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
                "#FE5F2D";
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
        </div>
      </div>
    </>
  );
}
export default Navbar;
