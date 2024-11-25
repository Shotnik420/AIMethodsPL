import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

function SilesianPhoenixSocials() {
  return (
    <div className="silesianPhoenixSocials">
      <div className="left">
        <div className="info">
          <h2>
            SKN <b>AI-METH</b>
          </h2>
          <h2>
            KATEA PODSTAW KONSTRUKCJI <b>MASZYN</b>
          </h2>
          <h2>
            WYDZIAŁ MECHANICZNY <b>TECHNOLOGICZNY</b>
          </h2>
          <h2>
            POLITECHNIKA <b>SLASKA</b>
          </h2>
        </div>
        <div className="socials">
          <h2>
            <IoMdMail className="icon" />
            skn.silesianphoenix@polsl.pl
          </h2>
          <h2>
            <FaFacebook className="icon" />
            @silesianphoenix
          </h2>
          <h2>
            <FaInstagram className="icon" />
            @silesianphoenix
          </h2>
          <h2>
            <FaLinkedin className="icon" />
            @Silesian Phoenix{" "}
          </h2>
          <h2>
            <FaTiktok className="icon" />
            @silesian.phoenix
          </h2>
          <h2>
            <IoEarth className="icon" />
            linktr.ee/silesianphoenix{" "}
          </h2>
        </div>
      </div>
      <div className="right">
        <div className="qr"></div>
        <div className="button">
          Prezentacja z wiekszą ilością szczegółów{" "}
          <FaExternalLinkAlt className="icon" />
        </div>
      </div>
    </div>
  );
}

export default SilesianPhoenixSocials;
