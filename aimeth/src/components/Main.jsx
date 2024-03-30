import "../styles/Main.css";
import videoPath from "../img/robot.mp4";
import { BsChevronCompactDown } from "react-icons/bs";
import logo from "../img/logo.png";
// To jest kod do głównej karty strony głównej.
function Main() {
  return (
    <div className="Main">
      <div className="mainLogo">
        <video src={videoPath} autoPlay loop muted />
        <div className="mainLogoContent">
          <img src={logo} />
          <h1>
            {" "}
            <strong>AI-Meth</strong>{" "}
          </h1>
          <div className="mainGoDown">
            <div className="kreska"></div>
            <a href="#projekty">
              <BsChevronCompactDown className="goDown" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
