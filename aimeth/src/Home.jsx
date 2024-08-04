import Main from "./components/Main";
import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import News from "./components/News";
import Osiagniecia from "./components/Osiagniecia";
import Projekty from "./components/Projekty";

import { motion } from "framer-motion";

function Home(props) {
  const fileServerAdress = props.FSA;
  const [accentColor, setAccentColor] = useState("#FF7A00");
  // useEffect(() => {
  //   console.log("Home mounted");
  // }, [accentColor]);
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Main
        log={props.log}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        FSA={fileServerAdress}
      />

      <News log={props.log} accentColor={accentColor} FSA={fileServerAdress} />

      <Projekty accentColor={accentColor} />

      <Osiagniecia log={props.log} FSA={fileServerAdress} />

      {/* <KontaktMini /> */}
    </motion.div>
  );
}
export default Home;
