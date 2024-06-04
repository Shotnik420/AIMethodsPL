import "../styles/Main.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useFetcher, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

// To jest kod do głównej karty strony głównej.
function Main({ accentColor, setAccentColor }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/silesianphoenix`;
    navigate(path);
  };
  let photoCount = 4;
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const accentColors = ["#FF7A00", "#667fbb", "#7b46ee", "#a3c83d"];
  useEffect(() => {
    if (currentPhoto == photoCount) {
      setCurrentPhoto(0);
    } else if (currentPhoto == -1) {
      setCurrentPhoto((prevPhoto) => prevPhoto - 1);
    }
    document.getElementById("carousel").style =
      "margin-left:" + -100 * currentPhoto + "vw;";
    setAccentColor(accentColors[currentPhoto]);
  }, [currentPhoto]);

  useEffect(() => {
    let eDate = document.getElementsByClassName("eventDate");
    let eBtn = document.getElementsByClassName("eventBtn");

    for (let i = 0; i < 3; i++) {
      eDate[i].style = "color:" + accentColor;
      eBtn[i].style = "background-color:" + accentColor;
    }
  }, [accentColor]);

  let intervalId = useRef(null);

  useEffect(() => {
    startInterval();
  }, []);

  function startInterval() {
    // Clear the existing interval if there is one
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    // Start a new interval
    intervalId.current = setInterval(() => {
      setCurrentPhoto((prevPhoto) => prevPhoto + 1);
    }, 5000);
  }

  return (
    <div className="Main">
      <div className="mainBackground">
        <div
          className="arrowLeft"
          onClick={() => {
            setCurrentPhoto((prevPhoto) => prevPhoto - 1);
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div
          className="arrowRight"
          onClick={() => {
            setCurrentPhoto((prevPhoto) => prevPhoto + 1);
            startInterval();
          }}
        >
          <MdOutlineKeyboardArrowRight />
        </div>
        <div className="silesianPhoenix projects" id="carousel">
          <div className="SPsection">
            <div className="SPlogo"></div>
            <div className="SPdesc">
              <b className="orange">Silesian Phoenix </b> to drużyna, którą
              tworzą studenci należący do międzywydziałowego SKN Zastosowania
              Metod Sztucznej Inteligencji AI - METH. {" "}
            </div>
            <div
              className="mainBtn"
              onClick={routeChange}
              style={{ backgroundColor: "#FF7A00" }}
            >
              Przeczytaj więcej <FiArrowUpRight className="arrow" />
            </div>
          </div>
        </div>
        <div className="senso projects">
          <div className="sensoBg"></div>
        </div>
        <div className="iso projects"></div>
        <div className="erno projects"></div>
      </div>
      <div className="events">
        <Event
          date="11 Listopad"
          type="Konkurs"
          name="Canadian rover challange"
        />
        <Event date="11 Grudzień" type="Wydarzenie" name="GOES-U" />
        <Event date="24 Grudzień" type="Święta" name="Boże narodzenie" />
      </div>
    </div>
  );
}

function Event({ date, type, name }) {
  return (
    <div className="event">
      <div className="eventDate">{date}</div>
      <div className="eventLine"></div>
      <div className="EventContainer">
        <div className="left">
          {" "}
          <div className="eventType">{type}</div>
          <div className="eventName">{name}</div>
        </div>
        <div className="right">
          <div className="eventBtn">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
