import React from  'react';
import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Testimonials.css';

const Testimonials = () => {
    useEffect(() => {
        var car = document.querySelectorAll('.carousel');
        M.Carousel.init(car, {
            // fullWidth: true,
            // indicators: true
        });
      }, [])
    return(
        <div className="carousel">
        <h3 className="center-align light-blue-text text-darken-4">Our Societies</h3>
          <div className="carousel-item">
            <div className="card hovarable">
              <div className="card-image">
                <img src={require("./Images/CS.jpeg")} alt="CS" />
                <div className="card-content"><h5 className="light-blue-text text-darken-4">Computer Society</h5></div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card hovarable">
              <div className="card-image">
                <img src={require("./Images/SPS.jpeg")} alt="SPS" />
                <div className="grad card-content"><h6 className="light-blue-text text-darken-4">Signal Processing Society</h6></div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card hovarable">
              <div className="card-image">
                <img src={require("./Images/PES.jpeg")} alt="PES" />
                <div className="card-content"><h6 className="light-blue-text text-darken-4">Power and Energy Society</h6></div>
              </div>
            </div>
          </div><div className="carousel-item">
            <div className="card hovarable">
              <div className="card-image">
                <img src={require("./Images/WiE.jpeg")} alt="WIE" />
                <div className="card-content"><h6 className="light-blue-text text-darken-4">Women in Enngineering Affinity Group</h6></div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card hovarable">
              <div className="card-image">
                <img src={require("./Images/IAS.jpeg")} alt="IAS" />
                <div className="card-content"><h6 className="light-blue-text text-darken-4">Industry Automation Society</h6></div>
              </div>
            </div>
          </div>
        </div>
    
    )
}

export default Testimonials;
