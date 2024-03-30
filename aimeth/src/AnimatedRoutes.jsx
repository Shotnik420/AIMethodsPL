import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Kontakt from "./Kontakt";
import Login from "./components/Login";
import Senso from "./components/Senso";
import TitleParallax from "./components/titleParallax";
import Archiwum from "./components/Archiwum";
import Wspolpraca from "./components/Wspolpraca";
import AboutUs from "./components/AboutUs";
import SilesianCanvas from "./components/SilesianCanvas";
import { AnimatePresence } from "framer-motion";
import Erne from "./components/Erne";
import AIDIAG from "./components/AIDIAG";

export default function AnimatedRoutes(props) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/silesianphoenix") {
      document.querySelector(".Navbar").style =
        "background-color: rgba(0, 0, 0, 0.685); position: absolute;";
      document.querySelector(".rozwijane").style =
        "background-color: rgba(0, 0, 0, 0.685);";
    } else if (
      location.pathname === "/aidiag" ||
      location.pathname === "/erne"
    ) {
      document.querySelector(".Navbar").style = "background-color:#9acd326e;";
      document.querySelector(".rozwijane").style =
        "background-color: #9acd326e;";
    } else if (
      location.pathname === "/kontakt" ||
      location.pathname === "/integralsenso"
    ) {
      document.querySelector(".Navbar").style =
        "background-color: rgba(0, 0, 0, 0.685);";
      document.querySelector(".rozwijane").style =
        "background-color: rgba(0, 0, 0, 0.685);";
    } else {
      // document.querySelector(".Navbar").style="background-color: #266abb6e;";
      // document.querySelector(".rozwijane").style="background-color: #266abb6e;";
      document.querySelector(".Navbar").style =
        "background-color: rgba(0, 0, 0, 0.685); ";
      document.querySelector(".rozwijane").style =
        "background-color: rgba(0, 0, 0, 0.685);";
    }
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home log={props.log} />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/integralsenso" element={<Senso />} />
        <Route path="/erne" element={<Erne />} />
        <Route path="/aidiag" element={<AIDIAG />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/silesianphoenix"
          element={
            <>
              <TitleParallax />

              <SilesianCanvas />
            </>
          }
        />
        <Route path="/test" element={<TitleParallax />} />
        <Route path="/aboutUs" element={<AboutUs log={props.log} />} />
        <Route path="/wspolpraca" element={<Wspolpraca log={props.log} />} />
        <Route path="/archiwum" element={<Archiwum />} />
      </Routes>
    </AnimatePresence>
  );
}
