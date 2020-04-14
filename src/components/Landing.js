import React from 'react';
import Photos from './Gallery.js';
import Missionvision from './Missionvision.js'
import About from './About.js'
import Carousel from './Carousel/Carousel.js'

import Intro from './Intro/Intro.js'
import 'materialize-css/dist/css/materialize.min.css';

const Landing = props =>{
  return (
    <body>
    <div className="landing">
      <div className="intro"><Intro/></div>
      <div className="mission"><Missionvision/></div>
      <div className="about"><About/></div>
      <div className="carousel"><Carousel/></div>

    </div>
    </body>
  );
}

export default Landing;
