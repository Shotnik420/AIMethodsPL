import "../styles/Projekty.css";

import obraz1 from "../img/lazik001.png";
//q: somewhere in this file something causes an error saying validateDOMNesting(...): <a> cannot appear as a descendant of <a> where is it and how to fix it?

import senso1 from "../img/senso1.png";
import senso2 from "../img/senso5.png";
import senso3 from "../img/senso6.png";

import aidiagobraz from "../img/logoai.png";

import archiveImg from "../img/archive.png";

import droneImg from "../img/erne.png";

import liceumImg from "../img/pojebiemnie.png";

import { Link } from "react-router-dom";

export default function Projekty() {
  function jedyneczka(
    logo,
    tekst,
    skala1,
    skala2,
    przesuniecie1,
    przesuniecie2
  ) {
    logo.style.bottom = przesuniecie1;
    logo.style.transform = skala1;

    tekst.style.marginTop = przesuniecie2;

    tekst.style.transform = skala2;
  }

  return (
    <div id="projekty">
      <h1>Nasze projekty:</h1>
      <div className="projekty_belt">
        <Link to={"/silesianphoenix"}>
          <div className="projekt_click silProj">
            <div>
              <h1 className="silesiatext">Silesian Phoenix</h1>

              <div className="projekt_img">
                <img className="silesialogo" src={obraz1} alt="obraz1" />
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/integralsenso"}>
          <div className="projekt_click sensoProj">
            <div>
              <h1 className="integraltext">Integral Senso</h1>

              <div className="projekt_img">
                <img id="sensoImg" src={senso2} alt="obraz1" />
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/aidiag"}>
          <div className="projekt_click aiProj">
            <div>
              <h1 className="aitext">AI-DIAG</h1>
              <div className="projekt_img">
                <img id="aidiaglogo" src={aidiagobraz} alt="obraz1" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="projekty_belt">
        <Link to={"/erne"}>
          <div className="projekt_click erneProj">
            <div>
              <h1 className="ernetext">Dron ERNE</h1>

              <div className="projekt_img">
                <img id="ernelogo" src={droneImg} alt="obraz1" />
              </div>
            </div>
          </div>
        </Link>
        <div className="projekt_click licProj">
          <div>
            <h1 className="liceumtext">Projekt Licealny</h1>

            <div className="projekt_img">
              <img id="liceumlogo" src={liceumImg} alt="obraz1" />
            </div>
          </div>
        </div>
        <Link to="/archiwum">
          <div className="projekt_click archProj">
            <div>
              <h1 className="archivetext">Archiwum</h1>

              <div className="projekt_img">
                <img id="archivelogo" src={archiveImg} alt="obraz1" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
