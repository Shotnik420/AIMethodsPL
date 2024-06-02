import Main from "./components/Main";

import "./styles/Home.css";
import News from "./components/News";
import Osiagniecia from "./components/Osiagniecia";
import Projekty from "./components/Projekty";

import { motion } from "framer-motion";

function Home(props) {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Main />

      <News log={props.log} />

      <Projekty />

      <Osiagniecia log={props.log} />

      {/* <KontaktMini /> */}
    </motion.div>
  );
}
export default Home;
