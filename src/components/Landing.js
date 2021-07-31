import React from 'react';
import Missionvision from './Missionvision.js'
import About from './About.js'
import Carousel from './Carousel/Carousel.js'

import Intro from './Intro/Intro.js'
import 'materialize-css/dist/css/materialize.min.css';

const Landing = props =>{
  return (
    <div className="landing">
      <div className="intro"><Intro/></div>
      <div className="mission"><Missionvision/></div>
      <div style={{marginTop: "-20px"}} className="about"><About/></div>
      <div><Carousel/></div>

    </div>
  );
}

export default Landing;
