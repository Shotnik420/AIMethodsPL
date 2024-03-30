import "./styles/Kontakt.css";
import {
  BsFillPersonFill,
  BsFillHouseDoorFill,
  BsFillTelephoneFill,
  BsDiscord,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Kontakt() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="kontakt_main">
        <div className="kontakt_lp">
          <ol>
            <li>
              <h1>Kontakt</h1>
            </li>

            <li>
              <h2>Główny zarząd</h2>
            </li>
            <li>
              {" "}
              <AiOutlineMail style={{ height: "100%" }} />
              <p>skn.aimeth@gmail.com</p>
            </li>
            <li>
              {" "}
              <BsFillTelephoneFill style={{ height: "100%" }} />
              <p>+48 123 456 789</p>
            </li>
            <li>
              {" "}
              <BsFillHouseDoorFill style={{ height: "100%" }} />
              <p>ul. konerskiego 22b, Politechnika CNT, 4 piętro</p>
            </li>
          </ol>
        </div>
        <div className="kontakt_pp">
          <div className="dane_kontaktowe">
            <h1>...lub skorzystaj z formularza</h1>
            <p>
              Twój adres:
              <br />
              <input type="email" placeholder="twoja@skrzynka.pl" />
            </p>
            <p>
              Temat:
              <br />
              <input type="text" placeholder="Napisz temat" />
            </p>
            <p>
              Treść:
              <br />
              <textarea placeholder="Treść" />
            </p>
            <button>Wyślij</button>
          </div>
        </div>
      </div>
      <div className="Formularz">
        <div className="Formularz_lp"></div>
        <div className="Formularz_pp">
          <h1>..albo znajdź nas tutaj:</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5097.736646700826!2d18.677715508147504!3d50.29438579936315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471131007f876cf3%3A0x61549f0bffdb4045!2sCentrum%20Nowych%20Technologii%20Politechniki%20%C5%9Al%C4%85skiej!5e0!3m2!1spl!2spl!4v1694536213204!5m2!1spl!2spl"
            width="80%"
            height="70%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}
