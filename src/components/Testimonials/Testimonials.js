import React, { Component } from  'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Testimonials.css';
import testimonials from './testimonials.json'

class Testimonials extends Component{

  componentDidMount() {
    M.Carousel.init(this.Carousel, {
      fullWidth: true,
      indicators: true
    });
      }
      render(){
        let content = testimonials.map((item, i) => {
          return (
            <div key={i} className="carousel-item white" href=" ">
            <div className="row">
            <div className="col s12">
            <div className="hoverable card border medium valign-wrapper">
                <div className= 'row '>
                  <div className='col s12 m4 l4 '>
                      <div style={{padding: "20px"}}>
                        <img style={{borderRadius: "100%", maxWidth: "70%"}} height='50%' src={require(`./Images/${item['img']}`)} className="circle responsive-img" alt="" />
                      </div>
                  </div>
                  <div style={{height: "100%"}} className='col s12 m8 l8 '>
                    <div className="card-content left-align">
                      {item["body"].split("\n").map((item, i) => {
                        return <p key={i}>{item}<br/></p>;
                      })}<br/>
                      <span className="left-align valign-wrapper"><b>{item["name"]}<br/> {item["designation"]}</b></span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          )
        });
        return (
          <div style={{visibility: "inherit"}}>
            <h2 className="light-blue-text text-darken-4 center">Testimonials</h2>
            <br/><br/>
            <div style={{visibility: "inherit"}} ref={Carousel => {this.Carousel = Carousel;}} className="adjuster container carousel carousel-slider center">
              <div className="carousel-fixed-item center"></div>
              {content}
            </div>

            </div>
    
      )
        }
    }
    
    
    export default Testimonials;    