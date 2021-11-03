import React, { Component } from  'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Testimonials.css';
class Testimonials extends Component{
  componentDidMount() {
        M.Carousel.init(this.Carousel, {
          fullWidth: true,
          indicators: true
      });
      }
  render(){
    return (
        <div ref={Carousel => {this.Carousel = Carousel;}} className="container carousel carousel-slider center">
          <div class="carousel-fixed-item center">
          </div>
          <div class="carousel-item red" href="#one!">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
          </div>
          <div class="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
          </div>
          <div class="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
          </div>
          <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
          </div>
        </div>

  )
    }
}


export default Testimonials;    