import "../styles/Main.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// To jest kod do głównej karty strony głównej.
function Main() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/silesianphoenix`;
    navigate(path);
  };
  return (
    <div className="Main">
      <div className="mainBackground">
        <div className="silesianPhoenix">
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
