import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";
export default function Router() {
  const [logged, setLogged] = useState(false);
  const fileServerAdress = "http://localhost:3300";
  useEffect(() => {
    axios
      .get(fileServerAdress + "/check", { withCredentials: true })
      .then((response) => {
        setLogged(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error("Error fetching logged:", error);
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar log={logged} />
      <ScrollToTop>
        <AnimatedRoutes log={logged} FSA={fileServerAdress} />
      </ScrollToTop>
      <Footer log={logged} FSA={fileServerAdress} />
    </BrowserRouter>
  );
}
