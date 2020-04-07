import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Hero = () => {
  return(
    <div>
      <img className="responsive-img" src={require("./kochi.jpg")} />
    </div>
  );
}

export default Hero;
