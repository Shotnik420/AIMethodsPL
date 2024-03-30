import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/lf1.jpg";
import Obraz2 from "../img/lf2.jpg";
import Obraz3 from "../img/lf3.jpg";
import { useEffect, useState } from "react";
import Fullscreen from "../components/Fullscreen";
export default function LF() {
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
      <div className="LP">
        <h1>Linefollower AQUILA</h1>
        <h2>Linefollowery</h2>
        <p>
          To roboty startujące w zawodach, na których rozgrywana jest kategoria
          Follow The Line (FTL). Przeważnie są to małe i szybkie konstrukcje,
          których zadaniem jest przejechanie wyznaczonej trasy w jak najkrótszym
          czasie. Roboty ścigają się na białym podłożu z wyznaczoną czarną trasą
          (lub odwrotnie). Kolejny projekt robota typu Linefollower, który
          został zrealizowany w ramach działalności SKN AI-METH, miał na celu
          wykorzystanie zdobytego doświadczenia oraz wiedzy nabytej przy
          wykonywaniu poprzedniej wersji. Głównym celem projektu było
          uczestnictwo w międzynarodowych zawodach własnoręcznie wykonanych,
          autonomicznych i mobilnych robotów RobotChallenge 2014.
        </p>
        <br />
        <p>
          Linefollower „Aquila” wziął udział w dwóch różnych kategoriach podczas
          wielu zawodów i festiwalów robotyki zarówno w Polsce jak i za granicą:
        </p>
        <ul>
          <li>Linefollower: RobotChallenge 2014 [Wiedeń];</li>
          <li>Linefollower: Chorzowski festiwal robotów [Chorzów];</li>
          <li>
            Linefollower: Linefollower Drag: RoboticTournament 2014 [Rybnik];
          </li>
          <li>Linefollower: Trójmiejski Turniej Robotów [Gdańsk];</li>
          <li>Linefollower: Roboxy 2014 [Gdańsk];</li>
          <li>
            Linefollower: Linefollower Drag: OpolskiFestiwalRobotów 2014
            [Opole].
          </li>
        </ul>
        <div
          className="imgBelt"
          style={{
            height: "25vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Obraz);
            }}
          >
            <img src={Obraz} alt="Prototyp" />
          </a>
        </div>
        <br />
        <br />
        <div
          className="imgBelt"
          style={{
            height: "25vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Obraz2);
            }}
          >
            <img src={Obraz2} alt="Prototyp" />
          </a>
        </div>
        <br />
        <br />
        <div
          className="imgBelt"
          style={{
            height: "25vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Obraz3);
            }}
          >
            <img src={Obraz3} alt="Prototyp" />
          </a>
        </div>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Obraz3 + ")",
          backgroundPosition: "90% 0",
        }}
      ></div>
    </div>
  );
}
