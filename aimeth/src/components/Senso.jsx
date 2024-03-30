//Strona dla projektu "Integral Senso"
import "../styles/Senso.css";

import React, { useEffect, useState } from "react";

import logo1 from "../img/senso1.png";
import logo2 from "../img/senso5.png";
import logo3 from "../img/senso6.png";
//tu importujemy obrazki
import obrazek1 from "../img/senso1.png";
import obrazek1alt from "../img/senso7.png";

import obrazek2 from "../img/senso2.jpg";
import obrazek3 from "../img/senso3.jpg";
import obrazek3alt from "../img/senso3alt.jpg";

import obrazek5 from "../img/senso5.jpg";
import obrazek5alt from "../img/senso5alt.jpg";

import obrazek6 from "../img/senso6.jpg";
import obrazek6alt from "../img/senso6alt.png";
import discoPlakat from "../img/disco.jpg";
import kulkiPlakat from "../img/kulki.jpg";
import braillePlakat from "../img/braille.jpg";

import jagoda from "../img/jagoda.jpg";
import sponsor1 from "../img/sponsorzy/spons2.png";
import sponsor2 from "../img/sponsorzy/spons5.png";
import { motion } from "framer-motion";

import Fullscreen from "./Fullscreen";

//tutaj dajemy kontent od projektu
function DiscoBulbulator(props) {
  return (
    <>
      <h1>DiscoBulbulator</h1>
      <div class="senso_img_belt">
        <a
          onClick={() => {
            props.pass(obrazek1);
          }}
        >
          <img target="_blank" src={obrazek1} alt="discoBulbulator" />
        </a>
        <a
          onClick={() => {
            props.pass(obrazek1alt);
          }}
        >
          <img src={obrazek1alt} alt="discoBulbulator" />
        </a>
      </div>
      <p>
        Urządzenie skierowane jest nawet do najmłodszych dzieci, wspomagając ich
        naukę poznawania liter poprzez zabawy z literami, podpisywanie obrazków
        znajdujących się na kartach.
      </p>
      <p>
        Działanie urządzenia bazuje na technologii RFID (Radio-frequency
        identification) przy zastosowaniu rezystorów.
      </p>

      <p>Autorem urządzenia jest Karol Wilk.</p>
      <a
        onClick={() => {
          props.pass(discoPlakat);
        }}
      >
        <img src={discoPlakat} alt="plakat" />
      </a>
    </>
  );
  //q: this component renders as [object, OBJECT] in the browser. Why?
  //a: because it's an object, not a string. You can't render an object in the browser.
}
function Puzzle(props) {
  return (
    <>
      <h1>Kulki-Fakturki - Puzzle 3D</h1>
      <div class="senso_img_belt">
        <a
          onClick={() => {
            props.pass(obrazek3);
          }}
        >
          <img target="_blank" src={obrazek3} alt="discoBulbulator" />
        </a>
        <a
          onClick={() => {
            props.pass(obrazek3alt);
          }}
        >
          <img target="_blank" src={obrazek3alt} alt="discoBulbulator" />
        </a>
      </div>
      <p>
        Urządzenie skierowane jest do osób niewidomych lub słabowidzących i
        stanowi zestaw interaktywnych półkul, które w momencie połączenia dwuch
        odpowiadających sobie wydają sygnał gratyfikujący w postaci emisji
        światła, dźwięku lub wibracji.
      </p>
      <p>Autorem urządzenia jest Magdalena Moruś oraz Piotr Bosowski.</p>
      <p>
        Wszystkie pliki źródłowe oraz instrukcja wytworzenia i montażu
        Kulek-Fakturek są opublikowane pod adresem z kodu QR na licencji MIT.
      </p>
      <a
        onClick={() => {
          props.pass(kulkiPlakat);
        }}
      >
        <img src={kulkiPlakat} alt="plakat" />
      </a>
    </>
  );
}
function Rfid(props) {
  return (
    <>
      <h1>Interaktywna Tablica Rzep - RFID</h1>
      <div class="senso_img_belt">
        <a
          onClick={() => {
            props.pass(obrazek2);
          }}
          target="_blank"
          rel="noreferrer"
        >
          <img target="_blank" src={obrazek2} alt="discoBulbulator" />
        </a>
      </div>
      <p>
        Urządzenie skierowane jest nawet do najmłodszych dzieci, wspomagając ich
        naukę poznawania liter poprzez zabawy z literami, podpisywanie obrazków
        znajdujących się na kartach.
      </p>
      <p>
        Działanie urządzenia bazuje na technologii RFID (Radio-frequency
        identification) przy zastosowaniu rezystorów.
      </p>
      <p>Autorem urządzenia jest Karol Wilk.</p>
    </>
  );
}
//change const to function with props
function Braille(props) {
  return (
    <>
      <h1>
        Translator Braille'a - Mobilne urządzenie do nauki alfabetu Braille'a
      </h1>
      <div class="senso_img_belt">
        <a
          onClick={() => {
            props.pass(obrazek5);
          }}
        >
          <img target="_blank" src={obrazek5} alt="discoBulbulator" />
        </a>
        <a
          onClick={() => {
            props.pass(obrazek5alt);
          }}
        >
          <img target="_blank" src={obrazek5alt} alt="discoBulbulator" />
        </a>
      </div>
      <p>
        Urządzenie wspiera proces nauki alfabetu Braille'a osób niewidomych,
        niedowidzących oraz tracących wzrok. Jest cennym wsparciem w pracowni
        tyflopedagogicznej, a także przy indywidualnym treningu i nauce
        alfabetu.
      </p>
      <p>
        Budowa urządzenia:
        <ul>
          <li>Układ wykorzystujący mikro serwomechanizmy</li>
          <li>Zastosowanie druku 3D w technologii FDM i SLA</li>
          <li> Przyciski do przewijania wyświetlanego znaku</li>
          <li>Komunikacja przez Bluetooth</li>
          <li>Wymiary sześciopunktu zgodne z rzeczywistymi</li>
        </ul>
      </p>
      <p>Autorem urządzenia jest Kacper Jurasz oraz Szymon Hudziak.</p>
      <a
        onClick={() => {
          props.pass(braillePlakat);
        }}
      >
        <img src={braillePlakat} alt="plakat" />
      </a>
    </>
  );
}
function Diody(props) {
  return (
    <>
      <h1>Diody Braille'a</h1>
      <div class="senso_img_belt">
        <a
          onClick={() => {
            props.pass(obrazek6);
          }}
        >
          <img target="_blank" src={obrazek6} alt="discoBulbulator" />
        </a>
      </div>
      <p>
        Jest to urządzenie do nauki alfabetu Braille'a dla osób widomych oraz
        tracących wzrok. W połączeniu z aplikacją mobilną stanowi kieszonkowy
        translator, dzięki któremu użytkownik może odczytać sześciopunkt
        pojawiający się w postaci świecących się diód.
      </p>
      <p>
        Autorem urządzenia jest Kacper Jurasz wraz ze Zbigniewem Sroczyńskim
        odpowiedzialnym za montaż elektroniki oraz obudowę.
      </p>
    </>
  );
}

function Senso() {
  const [projekt, setProjekt] = useState(".disco");
  const [fullscreen, setFullscreen] = useState(false);
  const [sciezka, setSciezka] = useState(null);
  const [plakat, setPlakat] = useState(
    <DiscoBulbulator pass={passFullscreen} />
  );

  function passFullscreen(x) {
    console.log(x);
    setFullscreen(true);
    setSciezka(x);
  }

  useEffect(() => {
    var wszystkie = document.querySelectorAll(".senso_button");
    var wybor = document.querySelector(projekt);
    wszystkie.forEach((element) => {
      element.style.filter = "brightness(0.5)";
    });
    wybor.style.filter = "brightness(1)";
  }, [projekt]);
  return (
    <motion.div
      className="senso"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {fullscreen ? (
        <Fullscreen
          zamknij={() => {
            setFullscreen(false);
            document.querySelector(".Navbar").style.top = "0vh";
          }}
          sciezka={sciezka}
        />
      ) : null}

      {/* To jest tutaj roboczo, jeżeli to usuniesz strona przestanie działać */}

      <div className="popupClose" />
      <div id="senso_big_picture">
        <h1>INTEGRAL SENSO</h1>
        <img className="logosenso pierwszy" src={logo1} alt="logo" />
        <img className="logosenso drugi" src={logo2} alt="logo" />
        <img className="logosenso trzeci" src={logo3} alt="logo" />
      </div>

      <div id="senso_text">
        <h1>
          Naszą misją jest projektowanie i wytwarzanie wyspecjalizowanych pomocy
          edukacyjnych i urządzeń terapeutycznych
        </h1>

        <div id="senso_text_belt">
          <p>
            Zapoczątkowani w roku akademickim 2021/2022 jesteśmy najświeższym
            projektem, zrzeszającym najnowszych członków Koła, a także
            weteranów, chętnych wykazać się swoją inżynierską empatią i
            kreatywnością.
            <br />
            <br />
            <br />
            Wiceprezes Koła na rok 2021/2022 - Julia Nowak jest ambasadorem
            akcji charytatywnej “Świat lubi ludzi, którzy lubią świat. Poznaj
            świat zmysłami” stworzonej przez specjalistów ze Specjalnego Ośrodka
            Szkolno-Wychowawczego z Dąbrowy Górniczej, dzięki czemu Koło podjęło
            inicjatywę uczestnictwa w tej akcji. Aktywnie wspieramy Ośrodek,
            konsultujemy się ze specjalistami aby stworzyć idealne urządzenia
            terapeutyczne.
            <br />
            <br />
            <br />
            Zdobywamy wiedzę i rozwijamy umiejętności w zakresie elektroniki,
            programowania, montażu, warsztatowych zdolności manualnych,
            materiałoznawstwa, druku FDM oraz SLA, i wiele innych.
            <br />
            <br />
            <br />
            Cenimy sobie umiejętnosć rozumienia potrzeb innych i rozwiązywania
            problemów, gdyż{" "}
            <b>
              bycie inżynierem, to nie tylko praca w przemyśle czy labolatorium,
              ale również praca w służbie zwykłemu człowiekowi
            </b>
            , w niezwykły i innowacyjny sposób rozwiązując problemy i
            udoskonalając jego codzienność.
          </p>
          <div id="senso_text_belt_picture"></div>
        </div>

        <div className="senso_projects">
          <div className="senso_projects_description">{plakat}</div>
          <div className="senso_projects_buttons">
            <div
              style={{ filter: "brightness(1)" }}
              className="senso_button_text"
            >
              <p>Wybierz projekt</p>
            </div>
            <div
              style={{ backgroundImage: "url(" + obrazek1 + ")" }}
              className="senso_button disco"
              onClick={() => {
                setProjekt(".disco");
                setPlakat(<DiscoBulbulator pass={passFullscreen} />);
              }}
            ></div>
            <div
              style={{ backgroundImage: "url(" + obrazek2 + ")" }}
              className="senso_button rzep"
              onClick={() => {
                setProjekt(".rzep");
                setPlakat(<Rfid pass={passFullscreen} />);
              }}
            ></div>
            <div
              style={{ backgroundImage: "url(" + obrazek3 + ")" }}
              className="senso_button kulki"
              onClick={() => {
                setProjekt(".kulki");
                setPlakat(<Puzzle pass={passFullscreen} />);
              }}
            ></div>

            <div
              style={{ backgroundImage: "url(" + obrazek5 + ")" }}
              className="senso_button braille"
              onClick={() => {
                setProjekt(".braille");
                setPlakat(<Braille pass={passFullscreen} />);
              }}
            ></div>
            <div
              style={{ backgroundImage: "url(" + obrazek6 + ")" }}
              className="senso_button diody"
              onClick={() => {
                setProjekt(".diody");
                setPlakat(<Diody pass={passFullscreen} />);
              }}
            ></div>
          </div>
        </div>
        <div className="patenty">
          <div className="patenty_text">
            <h1>Nasze Wnioski Patentowe</h1>
          </div>
          <div className="patenty_belt">
            <div className="patenty_belt_element">
              <section>
                <h2> Kulki-fakturki</h2>
                <p>
                  Interaktywne urządzenie dla osób niewidomych i słabowidzących
                </p>
                <p>
                  Autorzy: <b>Magdalena Moruś oraz Piotr Bosowski</b>
                </p>
              </section>
              <h1>P.441058</h1>
            </div>
            <div className="patenty_belt_element">
              <section>
                <h2>Lateval</h2>
                <p>Interaktywne urządzenie do terapii mięśni orofacjalnych</p>
                <p>
                  Autor: <b>Julia Nowak</b>
                </p>
              </section>
              <h1>P.441059</h1>
            </div>
            <div className="patenty_belt_element">
              <section>
                <h2>Mobilne urządzenie do nauki alfabetu braille’a</h2>
                <p>
                  Autor: <b>Szymon Hudziak</b>
                </p>
              </section>
              <h1>P.441060</h1>
            </div>
            <div className="patenty_belt_element">
              <section>
                <h2>RzepCheck</h2>
                <p>
                  Interaktywne urządzenie do badania rozwoju zdolności
                  fonetycznych oraz motorycznych, zwłaszcza w terapii
                  logopedycznej oraz edukacji wczesnoszkolnej
                </p>
                <p>
                  Autor: <b>Karol Wilk</b>
                </p>
              </section>
              <h1>P.441779</h1>
            </div>
          </div>
        </div>
        <div className="senso_konferencja">
          <h1>Konferencja</h1>
          <p>
            20-22 Maja 2022 roku, w Wiśle odbyła się{" "}
            <span style={{ color: "#9ec8ff", fontWeight: "bold" }}>
              18 Konferencja Naukowa Majówka Młodych Biomechaników
            </span>{" "}
            (Medical and Sport Technologies & May's Meeting of Young
            Biomechanics named of prof. Dagmara Tejszerska)
            https://www.biomechanik.pl
          </p>
          <p>
            W wydarzeniu brała udział delegacja projektu, której prace zajęły
            bardzo wysokie miejsce na podium w konkursie Na{" "}
            <i>Najlepszy Plakat Studencki</i>.
          </p>
          <div className="senso_konferencja_belt">
            <div
              className="k_achievement"

              // onMouseEnter={
              //   (document.getElementsByClassName(
              //     "k_achievement"
              //   )[0].style.borderColor = "silver")
              // }
            >
              <div className="k_achievement_number">
                <h1 style={{ color: "silver", borderColor: "silver" }}>2</h1>
              </div>
              <div className="k_achievement_title">
                <h1 style={{ borderColor: "silver" }}>2 miejsce</h1>
                <p>Julia Nowak</p>
                <p>DiscoBulbulator</p>
              </div>
            </div>
            <div className="k_achievement">
              <div className="k_achievement_number">
                <h1 style={{ color: "gold", borderColor: "gold" }}>1</h1>
              </div>
              <div className="k_achievement_title">
                <h1 style={{ borderColor: "gold" }}>1 miejsce</h1>
                <p>Szymon Hudziak</p>
                <p>Mobilne urządzenie do nauki alfabetu Braille'a</p>
              </div>
            </div>
            <div className="k_achievement">
              <div className="k_achievement_number">
                <h1 style={{}}>W</h1>
              </div>
              <div className="k_achievement_title">
                <h1>Wyróżnienie</h1>
                <p>Magdalena Moruś oraz Piotr Bosowski</p>
                <p>Kulki-fakturki</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wspierajacy">
          <h1>Wspierają nas:</h1>
          <div className="senso_konferencja_belt">
            <div className="k_sponsor">
              <a
                href="https://www.facebook.com/IntegralSenso"
                target="_blank"
                rel="noreferrer"
              >
                <img src={jagoda} alt="facebook" />
              </a>
            </div>
            <div className="spons_grupa">
              <div className="k_sponsor">
                <a target="_blank" href="https://www.extral.com/">
                  <img src={sponsor1} alt="sponsor" />
                </a>
              </div>

              <div className="k_sponsor">
                <a target="_blank" href="https://3dconnexion.com/pl/">
                  <img src={sponsor2} alt="sponsor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Senso;
