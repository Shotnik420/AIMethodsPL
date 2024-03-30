import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ParallaxProvider } from "react-scroll-parallax";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ParallaxProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ParallaxProvider>
);
