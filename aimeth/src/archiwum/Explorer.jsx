import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/explorer1.jpg";
import Obraz2 from "../img/explorer2.jpg";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
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
        <h1>Trobot 6WD Explorer</h1>
        <p>
          To doskonała platforma przeznaczona zarówno dla początkujących
          entuzjastów robotyki jak i dla ośrodków prowadzących badania nad
          robotyką mobilną. Umożliwia łatwy start i oferuje szerokie możliwości
          rozbudowy.
        </p>
        <br />
        <p>
          Podwozie wyposażone jest w 6 silników DC z przekładniami, koła z
          ogumieniem terenowym, układ sensoryczny (czujniki IR, czujniki
          ultradźwiękowe, LRF, GPS, 9-DOF IMU) oraz obudowę z aluminiową płytą
          montażową umożliwiającą łatwą instalację dodatkowego wyposażenia.
        </p>
        <br />
        <p>Robot ma wymiary ok. 430x300x250mm i osiąga prędkość 0,85m/s.</p>
        <p>
          <br />
          Komputer pokładowy klasy PC z systemem Linux (ew. Windows),
          komunikacja Wi-Fi oraz rozbudowane układy I/O pozwalają na szybkie
          rozwijanie aplikacji autonomicznego sterowania.
        </p>
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
        <h2>Projekty realizowane w ramach robota Explorer6WD:</h2>
        <ol>
          <a
            href="https://sknaimeth.polsl.pl/system-sterowania-robota-mobilnego-modulem-rozpoznawania-mowy/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              System sterowania robota mobilnego z modułem rozpoznawania mowy
            </li>
          </a>
          <br />
          <a
            href="https://sknaimeth.polsl.pl/?page_id=965&preview=true"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              Model symulacyjny robota Explorer 6WD z uwzględnieniem uszkodzeń
            </li>
          </a>
        </ol>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Obraz2 + ")",
          backgroundPosition: "50% 0",
        }}
      ></div>
    </div>
  );
}
