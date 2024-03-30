import "../styles/Archiwum.css";
import { useEffect, useState } from "react";
import ISD from "../archiwum/ISD";
import Sumo from "../archiwum/Sumo";
import MTR from "../archiwum/MTR";
import SSL from "../archiwum/SSL";
import Quadrocopter from "../archiwum/Quadrocopter";
import Micromouse from "../archiwum/MicroMouse";
import LF from "../archiwum/LF";
import Explorer from "../archiwum/Explorer";
import { AiFillCloseCircle } from "react-icons/ai";
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import SumoImg from "../img/Sumo.png";
import LFImg from "../img/lf1.jpg";
import MTRImg from "../img/mtr3_1.jpg";
import SSLImg from "../img/small.jpg";
import MicromouseImg from "../img/micromouse.jpg";
import QuadImg from "../img/quad3.jpg";
import ExplorerImg from "../img/explorer1.jpg";
import isdObraz from "../img/isd/archiwum3.png";
import Fullscreen from "./Fullscreen";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 12, // max tilt rotation (degrees)
  perspective: 600, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
  speed: 600, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "linear", // Easing on enter/exit.
};


function PopUp(props) {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  }, []);
  document.querySelector(".Navbar").style.top = "-10vh";
  return (
    <>
      <div className="popupClose" onClick={props.zamknij}>
        <AiFillCloseCircle />
      </div>
      <div className="popup">{props.zawartosc}</div>
      <div className="backdrop" onClick={props.zamknij} />
    </>
  );
}

export default function Archiwum() {
  const [popup, setPopup] = useState(false);
  const [kontent, setKontent] = useState(null);

  return (
    <motion.div
      className="Archiwum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {popup ? (
        <PopUp
          zawartosc={kontent}
          zamknij={() => {
            setPopup(false);
            document.getElementsByTagName("body")[0].style.overflowY =
              "visible";
            document.getElementsByTagName("body")[0].style.overflowX = "hidden";
            document.querySelector(".Navbar").style.top = "0vh";
          }}
        />
      ) : null}

      <h1>Archiwum</h1>
      <p>Zobacz nasze poprzednie projekty</p>
      <div className="projektyGrid">
        <Tilt className="projektdiv"  options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<ISD />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + isdObraz + ")" }}
          >
            <div className="projekt_tekst">
              <p>Inteligentne systemy diagnostyczne</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<Sumo />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + SumoImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Roboty Sumo</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<MTR />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + MTRImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>MTR – Multitasking Tracked Robot</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<SSL />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + SSLImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Small Size League</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<Explorer />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + ExplorerImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Explorer6WD</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<Micromouse />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + MicromouseImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Micromouse</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<LF />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + LFImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Linefollower AQUILA</p>
            </div>
          </div>
        </Tilt>
        <Tilt className="projektdiv" options={defaultOptions}>
          <div
            className="projekt"
            onClick={() => {
              setKontent(<Quadrocopter />);
              setPopup(true);
            }}
            style={{ backgroundImage: "url(" + QuadImg + ")" }}
          >
            <div className="projekt_tekst">
              <p>Quadrocopter</p>
            </div>
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}
