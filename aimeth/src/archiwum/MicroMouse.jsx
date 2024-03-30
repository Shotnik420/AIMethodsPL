import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/micromouse.jpg";
import Obraz2 from "../img/micromouse1.jpg";
import Obraz3 from "../img/micromouse2.jpg";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
export default function Micromouse() {
  const [fullscreen, setFullscreen] = useState(false);
  const [sciezka, setSciezka] = useState(null);
  useEffect(() => {
    if (fullscreen === false) {
      document.querySelector(".popupClose").style.right = "7vw";
      document.querySelector(".popupClose").style.opacity = "1";
    }
  });
  return (
    <div className="popUpKontent">
      {fullscreen ? (
        <Fullscreen
          zamknij={() => {
            setFullscreen(false);
          }}
          sciezka={sciezka}
        />
      ) : null}
      <div
        className="LP"
        style={{
          overflowX: "none",
          overflowY: "scroll",
        }}
      >
        <h1>Micromouse</h1>
        <p>
          Roboty Micromouse tworzone są z myślą o udziale w krajowych oraz
          międzynarodowych zawodach robotów. Ich zadaniem jest znalezienie
          najkrótszej drogi do środka labiryntu oraz pokonanie jej w jak
          najkrótszym czasie. Początki tej konkurencji sięgają końcówki lat 70
          XX w. Micromouse są całkowicie autonomiczne, a poprzez wcześniejsze
          zapamiętanie umiejscowienia przeszkód – zdolne do pokonania labiryntu.
        </p>
        <br />
        <br />
        <p>
          W ramach projektu robota klasy Micromouse zostały zrealizowane
          następujące projekty:
        </p>
        <br />
        <br />
        <p>
          1. Oprogramowanie sterujące wirtualnym modelem robota klasy Micromous
        </p>
        <a
          target="_blank"
          href="https://sknaimeth.polsl.pl/wp-content/uploads/2017/02/Micromouse_oprogramowanie_ADawid.pdf"
        >
          <p>Prezentacja z projektu(pdf)</p>
        </a>
        <div
          className="imgBelt"
          style={{
            height: "50vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Obraz2);
            }}
          >
            <img src={Obraz2} alt="Micro Mouse Projekt 1" />
          </a>
        </div>
        <br />
        <br />
        <p>2. Projekt i wykonanie robota klasy Micromouse</p>
        <br />
        <br />
        <a
          target="_blank"
          href="https://sknaimeth.polsl.pl/wp-content/uploads/2017/02/Prezentacja_KBugdol.pdf"
        >
          <p>Prezentacja z projektu(pdf)</p>
        </a>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "50vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Obraz3);
            }}
          >
            <img src={Obraz3} alt="Micro Mouse Projekt 2" />
          </a>
        </div>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Obraz + ")",
          backgroundPosition: "55% 0",
        }}
      ></div>
    </div>
  );
}
