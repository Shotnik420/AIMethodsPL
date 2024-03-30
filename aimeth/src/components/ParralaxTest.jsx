import React from "react";
import "../styles/ParralaxTest.css";
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';


function ParralaxTest() {

    return (
      <div  className="test">
        <Parallax className="testTest"
             translateX={['0px', '0px']}
             scale={[-0.5, -0.5]}
             rotate={[-180, 0]}
             easing="easeInQuad"
            />
        </div>
    );
  }
export default ParralaxTest;
