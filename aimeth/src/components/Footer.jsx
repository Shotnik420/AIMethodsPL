import "../styles/Footer.css";
import { useEffect, useState, useRef } from "react";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import img1 from "../img/sponsorzy/spons1.png";
import React from "react";
import { Link } from "react-router-dom";
var liczbaSponsorow = 8;

function Footer(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      zdj: "/sponsorzy/spons1.png",
    },
  ]);
  const sponsorsTimer = useRef(0);
  const sponsorsCurrent = useRef(0); // zmienione na useRef

  useEffect(() => {
    axios
      .get("http://89.73.160.85:3300/sponsorzy")
      .then((response) => {
        setPosts(response.data);
        liczbaSponsorow = response.data.length - 3;
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    const sponsorsInterval = setInterval(() => {
      sponsorsTimer.current++;
      if (sponsorsTimer.current == 5) {
        sponsorsNext();
        sponsorsTimer.current = 0;
      }
    }, 1000);
    return () => clearInterval(sponsorsInterval);
  }, []);

  useEffect(() => {}, [posts]);

  function sponsorsUpdate() {
    document.querySelector(".sponsors").style =
      "margin-left:" + -12 * sponsorsCurrent.current + "vw;"; // dodane .current
  }

  function sponsorsNext() {
    sponsorsTimer.current = 0; // poprawione
    if (sponsorsCurrent.current == liczbaSponsorow) {
      sponsorsCurrent.current = 0;
    } else {
      sponsorsCurrent.current++;
    }

    sponsorsUpdate();
  }

  function sponsorsPrev() {
    sponsorsTimer.current = 0; // poprawione
    if (sponsorsCurrent.current == 0) {
      sponsorsCurrent.current = liczbaSponsorow;
    } else {
      sponsorsCurrent.current--;
    }
    sponsorsUpdate();
  }

  function wyloguj() {
    console.log("Wylogowano");
    axios
      .get("http://89.73.160.85:3300/logout")
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        // obsłuż błąd
      });
  }

  return (
    <div className="footer">
      <section id="footerTop">
        <div className="sponsorsText">
          <p>Współpraca z firmami:</p>
          <hr></hr>
          <div className="sponsorsContainer">
            <div
              className="sponsorsPrev"
              onClick={() => {
                sponsorsPrev();
              }}
            >
              <MdOutlineKeyboardArrowLeft className="sponsorsArrow" />
            </div>
            <div className="sponsorsSection">
              <div
                className="sponsors sponsorsFirst"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="sponsors"
                  style={{
                    backgroundImage: `url(/sponsorzy/${post.zdj})`,
                  }}
                ></div>
              ))}
            </div>
            <div
              className="sponsorsNext"
              onClick={() => {
                sponsorsNext();
              }}
            >
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="footerLogo"></div>
      </section>
      <section id="footerBottom">
        <article id="footerSocials">
          <div className="socialRing">
            <BsYoutube />
          </div>
          <div className="socialRing">
            <BsFacebook />
          </div>
          <div className="socialRing">
            <BsInstagram />
          </div>
        </article>
        <article id="footerText">
          Wykonanie: Daniel Szota i Jakub Błaszczyk © AI-METH{" "}
          {new Date().getFullYear()}
          {"          "}
          {props.log ? (
            <form
              action="http://localhost:3300/logout?_method=DELETE"
              method="POST"
            >
              <h1 id="loginbut">WYLOGUJ</h1>
            </form>
          ) : (
            <>
              <br />
              <Link to={"/login"}>
                <h1 id="loginbut">ZALOGUJ</h1>
              </Link>
            </>
          )}
        </article>
      </section>
    </div>
  );
}

export default Footer;
