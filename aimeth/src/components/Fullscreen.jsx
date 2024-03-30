import "../styles/Fullscreen.css";
import { MdKeyboardBackspace } from "react-icons/md";
export default function Fullscreen(props) {
  document.querySelector(".popupClose").style.right = "-5vw";
  document.querySelector(".popupClose").style.opacity = "0";
  document.querySelector(".Navbar").style.top = "-10vh";
  return (
    <>
      <div className="backdrop" />
      <MdKeyboardBackspace onClick={props.zamknij} className="goBack" />
      <div className="fullscreen">
        <div className="fullscreen__content">
          <a href={props.sciezka} target="_blank">
            <img src={props.sciezka} />
          </a>
        </div>
      </div>
    </>
  );
}
