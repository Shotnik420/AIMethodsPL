import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/quad1.jpg";
import Obraz2 from "../img/quad2.jpg";
import Obraz3 from "../img/quad3.jpg";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
export default function Quadrocopter() {
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
        <h1>Projekt Quadrocopter</h1>
        <p>
          Celem projektu było opracowanie stanowiska laboratoryjnego do badania
          systemów sterowania wielowirnikowych bezzałogowych obiektów
          latających. Docelowo systemów sterowania tolerujących uszkodzenia.
        </p>
        <br />
        <p>Podział prac obejmował:</p>
        <ul>
          <li>
            zaprojektowanie i wykonanie platformy quadrocoptera o możliwości
            celowego wprowadzania wybranych uszkodzeń
          </li>
          <li>
            opracowanie aplikacji na urządzenie mobilne (tablet) umożliwiającej
            sterowanie platformą, zadawanie uszkodzeń oraz prowadzenie
            telemetrii
          </li>
          <li>
            wykorzystanie środowiska symulacyjnego (V-REP) do testowania
            zachowania platformy przy wprowadzanych uszkodzeniach oraz do
            testowania opracowanych algorytmów sterujących
          </li>
        </ul>
        <p>
          Platforma quadrocoptera wyposażona została w układy pozwalające na
          wprowadzanie trzech uszkodzeń (każde innego typu): uszkodzenie
          fragmentu śmigła, uszkodzenie sterownika silnika, utrata komunikacji.
          Wykorzystując tablet jesteśmy w stanie połączyć się z symulatorem
          quadrocoptera. Możemy nim sterować oraz wprowadzać uszkodzenia.
        </p>
        <br />
        <br />
        <h2>Platforma quadrocoptera</h2>
        <p>
          Quadrocopter został wykonany z użyciem zarówno gotowych jak i
          autorskich komponentów. Komponenty oznaczone jako dostępne są to
          układy, w które wyposażona jest większość platform multiwirnikowych.
          Wyjątkiem jest tutaj urządzenie mobilne, którego użycie nie byłoby
          możliwe bez opracowania własnych modułów. Ponieważ głównym celem pracy
          nie było opracowanie własnego kontrolera lotu, wykorzystano układ DJI
          Naza-M Lite (2). Do tego zaprojektowane zostały: moduł zasilający (4),
          moduł nawigacyjny (5) oraz moduł z czujnikami (6). Moduły te
          zaprojektowane zostały przy wykorzystaniu oprogramowania Altium
          Designer, a wyprodukowane dzięki uprzejmości gliwickiej firmy KONO.
        </p>
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
        <h1>Projekt Quadro 2.0</h1>
        <p>
          W grudniu 2018 r. rozpoczęte zostały prace nad quadrocopterem nr 2.
          Głównym założeniem projektu jest rozwój zainteresowań i poszerzanie
          wiedzy z zakresu latających pojazdów bezzałogowych. Naszym najbliższym
          celem jest start w Droniadzie 2019.
        </p>
        <p>Dotychczasowe użyte podzespoły i technologie:</p>
        <ul>
          <li>
            początkowo wykorzystaliśmy ramę z poprzedniego modelu, jednakże duża
            liczba dodatkowych elementów zmobilizowała nas do wykonania własnej,
            przy pomocy technologii druku 3D
          </li>
          <li>
            dron został wyposażony w autopilota Pixhawk PX4, wraz z encoderem i
            GPS z kompasem
          </li>
          <li>
            sterowanie manualnego odbywa się przy pomocy aparatury FRYSky X9D
          </li>
          <li>
            minikomputer Raspberry Pi3 będzie służył m.in. do programowania i
            autonomicznego lotu – do którego użyto kompatybilnej kamery
            Raspberry Pi HD v2 i laserowego czujnika odległości
          </li>
        </ul>
        <br />
        <p>Nad przygotowaniami pracują studenci z różnych kierunków:</p>
        <ul>
          <li>
            Automatyka i Robotyka, Teleinformatyka i Informatyka –
            programowanie, transfer danych wraz z przetwarzaniem obrazu,
            wdrażanie systemów teleinformatycznych i antykolizyjnych oraz
            autonomiczny lot
          </li>
          <li>
            Mechatronika zastosowanie nowoczesnych materiałów do budowy drona i
            rozwiązywanie technologicznych problemów
          </li>
        </ul>
        <p>
          Projekt powstaje z inicjatywy 2 studentów Politechniki Śląskiej.
          Obecnie zespół liczy 5 studentów, opiekunowie naukowi to prof. Pol.
          Śl. dr hab. inż. Piotr Przystałka oraz dr inż. Wawrzyniec Panfil.
        </p>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Obraz3 + ")",
          backgroundPosition: "50% 0",
        }}
      ></div>
    </div>
  );
}
