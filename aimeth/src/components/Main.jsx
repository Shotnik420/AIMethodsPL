import "../styles/Main.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import EditEvents from "./EditEvents";

function Main({ log, accentColor, setAccentColor, FSA }) {
  const fileServerAdress = FSA;

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/silesianphoenix`;
    navigate(path);
  };

  let photoCount = 4;
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const accentColors = ["#FF7A00", "#667fbb", "#7b46ee", "#a3c83d"];
  let intervalDuration = 8000;

  const intervalId = useRef(null); // Correctly defined using useRef

  useEffect(() => {
    if (currentPhoto >= photoCount) {
      setCurrentPhoto(0);
    } else if (currentPhoto <= -1) {
      setCurrentPhoto(photoCount - 1);
    }
    document.getElementById("carousel").style =
      "margin-left:" + -100 * currentPhoto + "vw;";
    setAccentColor(accentColors[currentPhoto]);
  }, [currentPhoto]);

  useEffect(() => {
    startInterval();
    axios
      .get(fileServerAdress + "/posts")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    filterAndSortEvents();
  }, [events]);

  function startInterval() {
    // Clear the existing interval if there is one
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    // Start a new interval
    intervalId.current = setInterval(() => {
      setCurrentPhoto((prevPhoto) => prevPhoto + 1);
    }, intervalDuration);
  }

  function filterAndSortEvents() {
    const today = new Date();
    const futureEvents = events
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5);

    setFilteredEvents(futureEvents);
  }

  return (
    <>
      <div className="Main">
        <div className="mainBackground">
          <div
            className="arrowLeft"
            onClick={() => {
              setCurrentPhoto((prevPhoto) => prevPhoto - 1);
              startInterval();
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
                Metod Sztucznej Inteligencji AI - METH.{" "}
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
          {filteredEvents.map((event, key) => (
            <Event
              key={key}
              date={event.date}
              type={event.type}
              name={event.text}
            />
          ))}
        </div>
      </div>
      {log ? <EditEvents FSA={FSA} /> : null}
    </>
  );
}

function Event({ date, type, name }) {
  return (
    <>
      <div className="event">
        <div className="eventDate">{date}</div>
        <div className="eventLine"></div>
        <div className="EventContainer">
          <div className="left">
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
    </>
  );
}

export default Main;
