import "../styles/Erne.css";
import ReactSwipe from "react-swipe";
import aidiag from "../img/aidiag/aidiag1.jpg";
import aidiag2 from "../img/aidiag/aidiag2.jpg";
import aidiag3 from "../img/aidiag/aidiag3.jpg";
import aidiag4 from "../img/aidiag/aidiag4.jpg";
import aidiag5 from "../img/aidiag/aidiag5.jpg";
import aidiag6 from "../img/aidiag/aidiag6.jpg";
import aidiaglogo from "../img/logoai.png";
import osoba1 from "../img/erne/JR.png";
import osoba2 from "../img/erne/AM.png";
import osoba3 from "../img/erne/MRA.png";
import osoba4 from "../img/erne/WM.jpg";
import osoba5 from "../img/erne/PP.jpg";
import osoba6 from "../img/erne/idk.jpg";

import { motion } from "framer-motion";

import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function AIDIAG() {
  function Osoba(props) {
    return (
      <div className="tile">
        <div
          className="osobaPhoto"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "0% 75%",
          }}
        ></div>
        <div className="osobaId">{props.name}</div>
        <div className="osobaLine"></div>
        <div className="osobaPosition">{props.position}</div>
      </div>
    );
  }
  let reactSwipeEl;
  return (
    <motion.div
      id="aidiag"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ReactSwipe
        childCount={6}
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div
          style={{
            backgroundImage: `url(${aidiag})`,
            backgroundPosition: "0% 50%",
          }}
          className="page"
        >
          <img src={aidiaglogo} alt="aidiag" />
        </div>
        <div
          style={{
            backgroundImage: `url(${aidiag2})`,
            backgroundPosition: "0% 70%",
          }}
          className="page"
        ></div>
        <div
          style={{
            backgroundImage: `url(${aidiag3})`,
            backgroundPosition: "0% 50%",
          }}
          className="page"
        ></div>
        <div
          style={{
            backgroundImage: `url(${aidiag4})`,
            backgroundPosition: "0% 100%",
          }}
          className="page"
        ></div>
        <div
          style={{
            backgroundImage: `url(${aidiag5})`,
            backgroundPosition: "0% 50%",
          }}
          className="page"
        ></div>
        <div
          style={{
            backgroundImage: `url(${aidiag6})`,
            backgroundPosition: "0% 50%",
          }}
          className="page"
        ></div>
      </ReactSwipe>
      <button
        id="back"
        className="erneButton"
        onClick={() => reactSwipeEl.prev()}
      >
        <IoIosArrowDropleftCircle />
      </button>
      <button
        id="forward"
        className="erneButton"
        onClick={() => reactSwipeEl.next()}
      >
        <IoIosArrowDropleftCircle />
      </button>
      <p className="erneOpis">
        <span style={{}}>Silesian Erne</span> to powstała w grudniu 2018 roku
        drużyna tworzona przez studentów Międzywydziałowego Studenckiego Koła
        Naukowego Zastosowania Metod Sztucznej Inteligencji AI-METH. Głównym
        założeniem projektu jest rozwój zainteresowań i poszerzanie wiedzy z
        zakresu latających pojazdów bezzałogowych.
      </p>
      <div
        style={{
          width: "90%",
          padding: "0px 5%",
        }}
        className="senso_konferencja_belt"
      >
        <div className="k_achievement">
          <div className="k_achievement_number">
            <h1 style={{}}>4</h1>
          </div>
          <div className="k_achievement_title">
            <h1>4 miejsce</h1>
            <p>Zawody Droniada 2019</p>
            <p></p>
          </div>
        </div>

        <div className="k_achievement">
          <div className="k_achievement_number">
            <h1
              style={{
                color: "rgb(255, 243, 132)",
                borderColor: "rgb(255, 243, 132)",
              }}
            >
              S
            </h1>
          </div>
          <div className="k_achievement_title">
            <h1 style={{ borderColor: "rgb(255, 243, 132)" }}>
              Nagroda Specjalna
            </h1>
            <p>Open Link </p>
            <p>za najszybsze dostarczenie przesyłki w konkurencji.</p>
          </div>
        </div>

        <div className="k_achievement">
          <div className="k_achievement_number">
            <h1
              style={{
                color: "rgb(255, 243, 132)",
                borderColor: "rgb(255, 243, 132)",
              }}
            >
              S
            </h1>
          </div>
          <div className="k_achievement_title">
            <h1 style={{ borderColor: "rgb(255, 243, 132)" }}>
              Nagroda Specjalna
            </h1>
            <p>Instytutu Lotnictwa</p>
            <p>
              za najszybsze znalezienie samochodu na podstawie koloru karoserii
              w konkurencji
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          padding: "0px 5%",
          paddingTop: "10vh",
        }}
        className="managementRow"
      >
        <Osoba
          image={osoba1}
          name="Jakub Raczek"
          position="Lider, elektronika, mechanika"
        />
        <Osoba
          image={osoba2}
          name="Adrianna Malkusz"
          position="Soft oraz mechanika"
        />
        <Osoba
          image={osoba3}
          name="Maciej Radek"
          position="Elektronika, soft"
        />
      </div>
      <div
        style={{
          width: "90%",
          padding: "0px 5%",
        }}
        className="managementRow"
      >
        <Osoba
          image={osoba4}
          name="prof. dr hab. Wojciech Moczulski"
          position="Mentor"
        />
        <Osoba
          image={osoba6}
          name="dr inż. Wawrzyniec Panfil"
          position="Opiekun naukowy"
        />
        <Osoba
          image={osoba5}
          name="dr hab. inż. Piotr Przystałka, prof. PŚ"
          position="Opiekun naukowy"
        />
      </div>
      <div className="linkBelt">
        <div className="linkLP">
          <h1 className="oNaswMediach">O nas w mediach:</h1>
          <ul>
            <li>
              <a href="https://www.radio.katowice.pl/zobacz,43483,Droniada-Akademicki-konkurs-na-Muchowcu-.html">
                Polskie Radio Katowice 06.06.2019
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/metropoliagzm/videos/313480942909625/?__tn__=%2Cd%2CP-R&eid=ARDva3kN1_NoO32spJXDegl8LEO06EhoGeHfy_BtPjGKpvwuhZT2cDZ7Iv2J1YkDLjB48IQuz_4tZ_X2">
                Metropolia GZM 08.06.2019
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/droniadacc/videos/680505279063227/?v=680505279063227">
                Kadry Droniady 17.06.2019
              </a>
            </li>
            <li>
              <a href="https://gliwice.eu/aktualnosci/miasto/swietny-debiut-gliwickich-dronow">
                Gliwice 18.06.2019
              </a>
            </li>
          </ul>
        </div>
        <div className="linkPP">
          <h1>Dziękujemy</h1>
          <p>
            Pani Dziekan Wydziału Mechanicznego Technologicznego dr hab. inż.
            Annie Timofiejczuk, prof. PŚ za wsparcie finansowe projektu.
            Ośrodkowi Sportu Politechniki Śląskiej za udostępnienie lodowiska
            dla testów systemu BSP.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
