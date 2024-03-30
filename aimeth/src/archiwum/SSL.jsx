import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/small.jpg";
import Obraz2 from "../img/smallPrototyp.png";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
export default function SSL() {
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
        <h1>SSL - Small Size Robot League</h1>
        <p>
          Od 1997r. odbywają się zawody RoboCup , których celem jest tworzenie
          autonomicznych robotów, z zamiarem popularyzacji badań naukowych w
          zakresie sztucznej inteligencji i robotyki. Koło Naukowe Zastosowania
          Metod Sztucznej Inteligencji AI- METH podjęło się budowy własnej
          drużyny robotów o nazwie Silesian Hussars. Naszym celem jest
          wystartowanie w zawodach RoboCup, w lidze Small Size Robot League
          (SSL). W chwili obecnej SKN AI-METH posiada w pełni sprawny prototyp
          robota SSL. Prowadzone są dalsze prace nad rozwojem aplikacji.
        </p>
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
              setSciezka(Obraz2);
            }}
          >
            <img src={Obraz2} alt="SSL" />
          </a>
        </div>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Obraz + ")",
          backgroundPosition: "40% 0",
        }}
      ></div>
    </div>
  );
}
