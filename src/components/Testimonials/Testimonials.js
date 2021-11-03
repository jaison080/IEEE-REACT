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