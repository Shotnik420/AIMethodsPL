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
            <div className="image"></div>
            <h2>
              Z łazikiem zakwalifikowaliśmy się na zawody:
              <ul>
                <li>
                  Anatolian Rover Challenge 2023 w Turcji, gdzie zajęliśmy 9.
                  miejsce.
                </li>
                <li>
                  Canadian International Rover Challenge 2024, gdzie jako jedyny
                  zespół z Europy zajęliśmy 8. miejsce na 20 drużyn
                </li>
              </ul>
            </h2>
          </h1>
        </div>
        <div className="teamwork">
          <h1>Praca w zespole</h1>
          <div className="image"></div>
          <h2>
            Budowa łazika wymaga wiedzy technicznej, kreatywności, a także{" "}
            <b>
              dobrej organizacji pracy oraz podziału obowiązków na poszczególne
              sekcje
            </b>
            .
          </h2>
          <h2>
            Nasz zespół składa się z <b>ponad 25 osób</b>. Pracujemy na wzór
            małej firmy, w której bardzo ważna jest komunikacja i
            odpowiedzialność.
          </h2>
          <h2>
            Każda sekcja ma swój zakres obowiązków i współpracuje z innymi.
            Największym testem dla naszego zespołu jest moment zawodów, kiedy
            musimy działać pod dużą presją czasu
          </h2>
        </div>
      </div>
    </div>
  );
}
export default SilesianPhoenix;
