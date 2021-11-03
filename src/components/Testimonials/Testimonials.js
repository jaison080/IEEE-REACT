// import M from "materialize-css";

// export default class Testimonials extends Component {
//     componentDidMount() {
//         document.addEventListener('DOMContentLoaded', function () {
//             var elems = document.querySelectorAll('.slider');
//             M.Slider.init(elems, { height: 750 });
//         });
//     }
//     render() {
//         return (
//                 <div  class="container slider ">
//                     <ul class="slides">
//                         <li>
//                             <div className="slider-window-container">
//                                 <div className="slider-content-00">
//                                     <i class="fas fa-quote-right" id="quote"></i>
//                                     <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
//                                         "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
//                                     </h3>
//                                 </div>
//                                 {/* <div className="pointer"></div> */}
//                                 <div className="slider-content-01">
//                                     <div className="testimonial-image"></div>
//                                     <div className="content-details">
//                                         <h4>Nathan Abraham</h4>
//                                         <p>Secertary 2014</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>

//                         <li >
//                             <div className="slider-window-container">
//                                 <div className="slider-content-00">
//                                     <i class="fas fa-quote-right" id="quote"></i>
//                                     <h3>It was one of the best experiences in my life</h3>
//                                 </div>
//                                 <div className="slider-content-01">
//                                     <div className="testimonial-image"></div>
//                                     <div className="content-details">
//                                         <h4>John Koshy</h4>
//                                         <p>Chairperson 2012</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>

//                         <li >
//                             <div className="slider-window-container">
//                                 <div className="slider-content-00">
//                                     <i class="fas fa-quote-right" id="quote"></i>
//                                     <h3>IEEE was an amazing Experience</h3>
//                                 </div>
//                                 <div className="slider-content-01">
//                                     <div className="testimonial-image"></div>
//                                     <div className="content-details">
//                                         <h4>Ipsum Lorem</h4>
//                                         <p>Vice Chair 2015</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="slider-window-container">
//                                 <div className="slider-content-00">
//                                     <i class="fas fa-quote-right" id="quote"></i>
//                                     <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
//                                         "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
//                                     </h3>
//                                 </div>
//                                 <div className="slider-content-01">
//                                     <div className="testimonial-image"></div>
//                                     <div className="content-details">
//                                         <h4>Lorem Ipsum</h4>
//                                         <p>Chairperson 2010</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//         );
//     }
// }

import React, { Component } from  'react';
import { useEffect } from 'react';
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
              <div class="carousel-item white" href="#one!">
              <div class="row">
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    
  </div>
  
              </div>
              <div class="carousel-item white" href="#two!">
              <div class="row">
              <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    
  </div>
              </div>
              <div class="carousel-item white" href="#three!">
              <div class="row">
              <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    
  </div>
              </div>
              <div class="carousel-item white " href="#four!">
              <div class="row">
              <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. there are a lot of bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    <div class="col s4 m4 l4 " >
      <div class="card small waves-effect hoverable">
        <div class= 'row valign-wrapper'>
          <div class='col s4'>
        <div class="card-image">
          <img  height='150' width="150" src={require("./Images/CS.jpeg")} class="circle" alt="" />
          </div>
          </div>
          <div class='col s8'>
            <span class="center-align">The name shall go here, hope this works
            </span>
          </div>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
    
  </div>
              </div>
            </div>
    
      )
        }
    }
    
    
    export default Testimonials;    