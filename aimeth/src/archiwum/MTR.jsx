import "../styles/styleArchiwum/popUpKontent.css";
import Obraz from "../img/SUMO40.jpg";
import Mtr1_1 from "../img/mtr1_1.jpg";
import Mtr1_2 from "../img/mtr1_2.jpg";
import Mtr2_1 from "../img/mtr2_1.jpg";
import Mtr3_1 from "../img/mtr3_1.jpg";
import Mtr1 from "../img/mtr1.jpg";
import Mtr2 from "../img/mtr2.jpg";
import Fullscreen from "../components/Fullscreen";
import { useEffect, useState } from "react";
export default function MTR() {
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
        <h1>Multitasking Tracked Robot</h1>
        <p>
          W ramach działalności w SKN AI-METH został zbudowany wielozadaniowy
          robot gąsienicowy.
        </p>
        <br />
        <br />
        <p>
          Celem projektu było zaprojektowanie i wykonanie autonomicznego robota
          na podwoziu gąsienicowym, przeznaczonego do wykonywania zadań takich
          jak: patrolowanie terenów, zadania inspekcyjne, przenoszenie ładunków,
          operacje w środowiskach niebezpiecznych lub skażonych.
        </p>
        <br />
        <br />
        <p>
          Inspiracją projektu podwozia był bezzałogowy pojazd Ripsaw firmy Howe
          and Howe Technologies oraz prototyp robota z zawieszeniem niezależnym
          opracowanym przez amerykańską agencje rządową ”DARPA” –Agencje
          Zaawansowanych Projektów Badawczych w Obszarze Obronności.
        </p>
        <br />
        <br />
        <p>
          Projekt platformy powstał przy użyciu oprogramowania inżynierskiego
          Autodesk Inventor 2015. Umożliwiło to sporządzenie dokumentacji
          technicznej elementów składowych oraz przeprowadzenie symulacji
          działania zawieszenia i napędu. Platforma posiada układ gąsienicowego
          zawieszenia niezależnego, które pozwala na pokonywanie przeszkód
          terenowych. Wyposażona jest w sprężyny i amortyzatory, które tłumią
          nierówności podłoża. Rama maszyny składa się min. z aluminiowych
          profili montażowych. Dzięki czemu, cała konstrukcja jest modułowa i w
          łatwy sposób można do niej dołączyć dodatkowe podzespoły takie jak:
          ramię obrotowe z chwytakiem, uchwyt przegubowy z kamerą, zestaw
          czujników lub innych urządzeń. Pozostałe części ramy oraz zawieszenia
          zostały wykonane za pomocą wycinarki laserowej CNC lub na
          konwencjonalnych obrabiarkach. Niektóre elementy napędu z tworzywa
          sztucznego zostały wykonane w technologii druku 3D.
        </p>
        <br />
        <br />
        <h3>MTR 1.0</h3>

        <p>
          Pierwsza generacja robota gąsienicowego. Zbudowana w ramach projektu
          inżynierskiego przez Adama Najewskiego. Pojazd o wymiarach 70x50x25 cm
          ważył 32 kg i poruszał się z prędkością maksymalna ok. 7km/h.
          Umożliwiały to dwa silniki prądu stałego o mocy 250W każdy. Robot
          sterowany był przez Arduino Mega i komunikował się ze zbudowanym
          stanowiskiem operatora opartym na Arduino UNO. Urządzenia komunikowały
          się ze sobą za pomocą modułów xBee. Na pojeździe umieszczona była mała
          kamera bezprzewodowa 2,4 Ghz. Zasięg robota to ok 30m.
        </p>
        <br />
        <div className="imgBelt">
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr1_1);
            }}
          >
            <img src={Mtr1_1} alt="mtr1" />
          </a>
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr1_2);
            }}
          >
            <img src={Mtr1_2} alt="mtr2" />
          </a>
        </div>

        <h3>Dane techniczne:</h3>

        <ul>
          <li>Wymiary: 700x500x260 mm</li>
          <li>Prześwit: 90 mm</li>
          <li>Masa: 32kg</li>
          <li>Prędkość max: 8km/h</li>
          <li>Nośność: 12kg</li>
          <li>Zasilanie: 24V</li>
          <li>Silniki: 2x silniki DC 250W</li>
          <li>Zawieszenie: niezależne.</li>
        </ul>
        <h3>MTR 1.1</h3>
        <p>
          Robot został przygotowany do zawodów RoboDrift 2016. Zajął w nich II
          miejsce w kategorii Offroad i wyróżnienie w kategorii Freestyle. Na
          potrzeby konkursu zmieniono urządzenie do sterowania robotem na
          aparaturę modelarską RC. Ponadto został dodany przycisk bezpieczeństwa
          odcinający zasilanie i bezpieczniki. Robot został wyposażony w
          obrotową kamerę komunikującą się przez WiFi ze smartfonem. Za
          elektrykę i komunikację RC odpowiedzialny był Mateusz Kalus, a za
          kamerę internetową – Paweł Mync.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "30vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr2_1);
            }}
          >
            <img src={Mtr2_1} alt="mtr1" />
          </a>
        </div>
        <h3>MTR 1.2</h3>
        <p>
          W robocie został zastosowany układ sterowania wyższego Raspberry Pi 3
          z ROS (Robot Operating System). Za sterowanie niższego rzędu
          odpowiedzialne było dalej Arduino. Układ został wyposażony w ruter
          WiFi umożliwiający bezpośrednią komunikację zdalną z jednostką
          sterującą robotem. Na pojeździe umieszczono maszt z czujnikiem ruchu
          Kinect. Umożliwiał on zarówno przesyłanie obrazu jak podążanie robota
          za wskazanym obiektem (np. zielona piłka). Za sterowanie niższego
          rzędu odpowiedzialny był Wiktor Brożyński, za implementację Raspberry
          i Kinecta – Maciej Banach.
        </p>
        <br />
        <br />
        <p>
          Stworzenie robota zdalnie sterowanego było pierwszym z zaplanowanych
          etapów projektu. Kolejnym etapem jest rozbudowa jednostki sterującej o
          mikrokomputer Raspberry Pi 3. Zwiększy to moc obliczeniowa całego
          układu. Umożliwi fuzję danych z czujników oraz wyposażenie systemu
          wizyjnego w dodatkowe kamery. Kamery będą umieszczone na ruchomych
          platformach obrotowych, co polepszy obserwacje otoczenia. Następnym
          krokiem była rozbudowa aplikacji poprzez dodanie oprzyrządowania
          umożliwiającego odczyt informacji o stanie robota. Mogą to być dane o
          jego aktualnej pozycji z GPS albo parametrach takich jak np.:
          prędkość, przechylenie całego robota; uzyskane z akcelerometru,
          żyroskopu, enkoderów. W planach jest również wyposażenie robota w
          kamerę pozwalającą na obserwacje środowiska przy braku światła.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "30vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr3_1);
            }}
          >
            <img src={Mtr3_1} alt="mtr1" />
          </a>
        </div>
        <h3>MTR 2.0</h3>
        <p>
          Druga generacja robota zaprojektowana i w większości wykonana przez
          Adama Najewskiego w ramach pracy magisterskiej. Robot został zbudowany
          na nowo, korzystając z części z poprzedniej wersji. Rama platformy
          została wydłużona, zmieniono geometrię ramy i zawieszenia. Robot
          dostał dwa mocniejsze silniki, po 450 W każdy. Zostały wykonane nowe
          gąsienice robota uniemożliwiające zsunięcie się z kół. Zmienione
          zostały części układu napędowego. Dzięki zastosowaniu przekładni
          łańcuchowej możliwa jest zmiana przełożenia przekładni poprzez wymianę
          kół zębatych. Akumulatory żelowe zastąpiono akumulatorem Li-Pol 26 Ah.
          Komputer główny w dalszym ciągu stanowi Raspberry Pi 3 z ROS (Robot
          Operating System). Sterowanie robotem odbywa się przy pomocy
          bezprzewodowego pada Xbox One S.
        </p>
        <br />
        <div className="imgBelt">
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr1);
            }}
          >
            <img src={Mtr1} alt="mtr1" />
          </a>
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(Mtr2);
            }}
          >
            <img src={Mtr2} alt="mtr2" />
          </a>
        </div>
        <br />
        <ul>
          <li>Wymiary: 820x520x255 mm (bez kamery)</li>
          <li>Prześwit: 90 mm</li>
          <li>Masa: 30kg</li>
          <li>Prędkość max: 8km/h</li>
          <li>Nośność: 90kg</li>
          <li>Zasilanie: 24V</li>
          <li>Silniki: 2x silniki DC 450W</li>
          <li>Zawieszenie: niezależne.</li>
        </ul>
      </div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + Mtr3_1 + ")",
          backgroundPosition: "40% 0",
        }}
      ></div>
    </div>
  );
}
