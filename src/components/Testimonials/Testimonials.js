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
          <div>
            <h2 className="light-blue-text text-darken-4 center">Testimonials</h2>
            <br/><br/>
            <div ref={Carousel => {this.Carousel = Carousel;}} className="adjuster container carousel carousel-slider center">
              <div class="carousel-fixed-item center"></div>
              <div class="carousel-item white" href=" ">
              <div className="row">
              <div className="col s12">
              <div class="hoverable card border medium valign-wrapper">
                  <div class= 'row '>
                    <div class='col s12 m4 l4 '>
                        <div style={{padding: "20px"}}>
                          <img style={{borderRadius: "100%", maxWidth: "70%"}} height='50%' src={require("../main1.jpg")} class="circle responsive-img" alt="" />
                        </div>
                    </div>
                    <div style={{height: "100%"}} class='col s12 m8 l8 '>
                      <div class="card-content left-align">
                        <p>I am a very simple card. I am good at containing large bits of information.
                        I am convenient because I require little markup to use effectively.</p><br/>
                        <span class="left-align valign-wrapper">The name shall go here, hope this works</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
              <div class="carousel-item white" href=" ">
              <div className="row">
              <div className="col s12">
              <div class="hoverable card border medium valign-wrapper">
                  <div class= 'row '>
                    <div class='col s12 m4 l4 '>
                        <div style={{padding: "20px"}}>
                          <img style={{borderRadius: "100%", maxWidth: "70%"}} height='50%' src={require("../main1.jpg")} class="circle responsive-img" alt="" />
                        </div>
                    </div>
                    <div style={{height: "100%"}} class='col s12 m8 l8 '>
                      <div class="card-content left-align">
                        <p>I am a very simple card. I am good at containing large bits of information.
                        I am convenient because I require little markup to use effectively.</p><br/>
                        <span class="left-align valign-wrapper">The name shall go here, hope this works</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
              <div class="carousel-item white" href=" ">
              <div className="row">
              <div className="col s12">
              <div class="hoverable card border medium valign-wrapper">
                  <div class= 'row '>
                    <div class='col s12 m4 l4 '>
                        <div style={{padding: "20px"}}>
                          <img style={{borderRadius: "100%", maxWidth: "70%"}} height='50%' src={require("../main1.jpg")} class="circle responsive-img" alt="" />
                        </div>
                    </div>
                    <div style={{height: "100%"}} class='col s12 m8 l8 '>
                      <div class="card-content left-align">
                        <p>I am a very simple card. I am good at containing large bits of information.
                        I am convenient because I require little markup to use effectively.</p><br/>
                        <span class="left-align valign-wrapper">The name shall go here, hope this works</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
              <div class="carousel-item white" href=" ">
              <div className="row">
              <div className="col s12">
              <div class="hoverable card border medium valign-wrapper">
                  <div class= 'row '>
                    <div class='col s12 m4 l4 '>
                        <div style={{padding: "20px"}}>
                          <img style={{borderRadius: "100%", maxWidth: "70%"}} height='50%' src={require("../main1.jpg")} class="circle responsive-img" alt="" />
                        </div>
                    </div>
                    <div style={{height: "100%"}} class='col s12 m8 l8 '>
                      <div class="card-content left-align">
                        <p>I am a very simple card. I am good at containing large bits of information.
                        I am convenient because I require little markup to use effectively.</p><br/>
                        <span class="left-align valign-wrapper">The name shall go here, hope this works</span>
                      </div>
                    </div>
                  </div>
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