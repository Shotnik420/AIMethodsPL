import React from "react";
import "../styles/NavbarMobile.css";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  GiTrackedRobot,
  GiCardboardBoxClosed,
  GiArtificialIntelligence,
} from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { FaPuzzlePiece } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavbarMobile() {
  const [dropdown, setDropdown] = useState(false);
  const [projektyDropdown, setProjektyDropdown] = useState(false);

  function closeAllDropdowns() {
    setDropdown(false);
    setProjektyDropdown(false);
  }

  function openDropdown() {
    setDropdown(!dropdown);
  }

  function openProjektyDropdown() {
    setProjektyDropdown(!projektyDropdown);
  }

  return (
    <div className="navbarMobile">
      <div className="menu">
        <Link to="/" onClick={closeAllDropdowns}>
          <div className="logoContainer">
            <div className="logo"></div>
            <p>AI-METH</p>
          </div>
        </Link>

        <div className="menuButton" onClick={openDropdown}>
          <IoMdMenu />
        </div>
      </div>
      <div
        className="options"
        style={{
          height: `${
            dropdown ? `${projektyDropdown ? "57" : "35"}` + "vh" : "0vh"
          }`,
        }}
      >
        <div className="option important" onClick={openProjektyDropdown}>
          <AiOutlineFundProjectionScreen className="icon" /> Projekty{" "}
          <MdOutlineKeyboardArrowDown
            className="icon"
            style={{
              transform: `${
                projektyDropdown ? "rotate(-180deg)" : "rotate(0deg)"
              }`,
            }}
          />
        </div>
        <div
          className="projectsDropdown"
          style={{ height: `${projektyDropdown ? "22vh" : "0vh"}` }}
        >
          <Link to="/silesianphoenix" onClick={closeAllDropdowns}>
            <div className="project">
              Silesian Phoenix
              <GiTrackedRobot className="projectIcon SP" />
            </div>
          </Link>
          <Link to="/integralsenso" onClick={closeAllDropdowns}>
            <div className="project">
              Integral Senso
              <FaPuzzlePiece className="projectIcon IS" />
            </div>
          </Link>
          <Link to="/aidiag" onClick={closeAllDropdowns}>
            <div className="project">
              AI Diag
              <GiArtificialIntelligence className="projectIcon AID" />
            </div>
          </Link>
          <Link to="/erne" onClick={closeAllDropdowns}>
            <div className="project">
              Dron ERDE <TbDrone className="projectIcon ERD" />
            </div>
          </Link>
        </div>
        <Link to="/archiwum" onClick={closeAllDropdowns}>
          <div className="option important">
            <GiCardboardBoxClosed className="icon" /> Archiwum
          </div>
        </Link>
        <Link to="/aboutUs" onClick={closeAllDropdowns}>
          <div className="option">O nas</div>
        </Link>
        <Link to="/wspolpraca" onClick={closeAllDropdowns}>
          <div className="option">Współpraca</div>
        </Link>
        <Link to="/kontakt" onClick={closeAllDropdowns}>
          <div className="option">Kontakt</div>
        </Link>
      </div>
    </div>
  );
}

export default NavbarMobile;
