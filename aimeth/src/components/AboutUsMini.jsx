import "../styles/AboutUsMini.css";
import obrazek1 from "../img/zdjgrupowe.jpg";
import obrazek2 from "../img/ryba.jpg";
import obrazek3 from "../img/ryba2.jpg";

export default function AboutUsMini() {
  return (
    <div className="aboutUsMini">
      <h1>O nas</h1>
      <div className="aboutBelt">
        <div className="aboutImg">
          <img src={obrazek1} />
        </div>
        <div className="aboutText">
          <p>
            <span style={{ fontSize: "2rem" }}>
              Zrzeszamy Studentów Politechniki Śląskiej
            </span>
            , będących pasjonatami robotyki mobilnej. Działamy przy Katedrze
            Podstaw Konstrukcji Maszyn na Politechnice Śląskiej. Od strony
            merytorycznej opiekę nad Nami sprawują prof. dr hab. Wojciech
            Moczulski, dr hab. inż. Piotr Przystałka, prof. PŚ oraz dr inż.
            Wawrzyniec Panfil.
          </p>
        </div>
      </div>
      <div className="aboutBelt">
        <div className="aboutText">
          <p>
            <span style={{ fontSize: "2rem" }}>Od 2006</span> roku zajmujemy się
            budową autonomicznych robotów mobilnych. W grupach roboczych
            realizujemy projekty w ramach prac inżynierskich oraz magisterskich,
            a także jako działalność dodatkową, poszerzając tym samym swoje
            horyzonty.
          </p>
        </div>
        <div className="aboutImg">
          <img src={obrazek2} />
        </div>
      </div>
      <div className="aboutBelt">
        <div className="aboutImg">
          <img src={obrazek3} />
        </div>
        <div className="aboutText">
          <p>
            <span style={{ fontSize: "2rem" }}>Ogólne spotkania Koła, </span>
            odbywają się raz w miesiącu, w sali 406/7 Centrum Nowych Technologii
            w Gliwicach. Informacje o terminach spotkań uzyskać można poprzez
            kontakt na Facebooku lub wysłanie wiadomości e-mail na adres podany
            w zakładce „Kontakt”.
          </p>
        </div>
      </div>
    </div>
  );
}
