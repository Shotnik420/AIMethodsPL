import React, { useRef, useEffect, useState } from "react";
import "../styles/SilesianPhoenix.css";

function SilesianPhoenix() {
  return (
    <div className="aboutContainer">
      <div className="aboutUs">
        <h1>Kim jesteśmy?</h1>
        <div className="textContainer">
          <h2>
            <b>Silesian Phoenix</b> to grupa studentów z{" "}
            <b>Politechniki Śląskiej</b>, skupiona na projektowaniu oraz
            tworzeniu łazików czyli mobilnych platform robotycznych do
            zastosowań eksploracyjnych.
          </h2>
          <h2>
            Stawiamy na innowację, nie boimy się eksperymentować oraz wychodzić
            poza schematy.
          </h2>
          <h2>
            Oprócz tworzenia łazików, rozwijamy nasze kompetencje, uczymy się
            zarządzania projektem oraz pracy zespołowej
          </h2>
        </div>
      </div>
      <div className="secondSection">
        <div className="currentProject">
          <h1>
            Phoenix <b>III</b>
            <h2>
              Aktualnie rozwijanym łazikiem jest <b>Phoenix III</b>. Kładziemy
              wysoki nacisk na modularną konstrukcję oraz na redukcję masy.
              Wykorzystujemy do tego materiały polimerowe i kompozytowe.
              Pracujemy nad elektroniką, oprogramowaniem oraz elementami
              mechanicznymi.
            </h2>
          </h1>
        </div>
        <div className="teamwork">
          <h1>Praca w zespole</h1>
        </div>
      </div>
    </div>
  );
}
export default SilesianPhoenix;
