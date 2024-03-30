import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/SUMO40.jpg";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
export default function Sumo() {
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
      <div className="LP">
        <h1>Roboty Sumo</h1>
        <p>
          W ramach pracy w SKN AI-METH zostały zrealizowane 3 projekty w oparciu
          o mini-robota gąsienicowego firmy Pololu. Robot ten wyposażony jest w
          czujniki bezwładnościowe do pomiaru przyśpieszenia liniowego,
          prędkości obrotowej oraz pola magnetycznego, a także w buzzer oraz
          czujniki odbiciowe. W ramach projektów inżynierskich zostały wydane
          tematy opracowania algorytmów:
        </p>
        <ul>
          <li>lokalizacji względnej</li>
          <li>sterowania robotem sumo</li>
          <li>pokonywania labiryntu</li>
        </ul>
        <p>
          Robot ten świetnie spełnił swoje zadanie, ponieważ z uwagi na liczne
          wbudowane czujniki oraz układ sterowania możliwe było jego
          programowanie w języku C++, co znacznie ułatwiło pracę i pozwoliło na
          zrealizowanie projektów. Wszystkie tematy zostały zweryfikowane poza
          robotem również w środowisku symulacyjnym LabVIEW.
        </p>
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
