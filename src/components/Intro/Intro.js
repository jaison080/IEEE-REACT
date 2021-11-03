import React, {Component} from 'react';
import notification_arr from './notifications.json'
import M from 'materialize-css/dist/js/materialize.min.js';
import './Intro.css'

class Intro extends Component{
  componentDidMount() {
    M.Carousel.init(this.Carousel, {
      fullWidth: true,
      indicators: true
  });
  M.Slider.init(this.Slider, {});
  }
  render(){
  let notifications = notification_arr.map((item, i) => {
    return <blockquote style={{"borderLeft":"5px solid #ffff", fontWeight: "bold"}} key={i}>{item.content} <a className="link" href={item.link}>Link »</a></blockquote>
  });
  return (
    <div style={{height: "100vh"}}>
      <div ref={Slider => {this.Slider = Slider;}} class="slider fullscreen">
      <ul class="slides">
        <li>
          <img src={require("../../assets/mec.jpeg")} alt="MEC"/> 
          <div class="caption right-align">
            <h3>This is our big Tagline!</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src={require("./trial.JPG")} alt="Trial"/> 
          <div class="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="https://lorempixel.com/580/250/nature/3" alt="Trial"/> 
          <div class="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="https://lorempixel.com/580/250/nature/4" alt="Trial"/> 
          <div class="caption left-align">
            <h3>This is our big Tagline!</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
      </ul>
      <div style={{ marginTop: "10em", zIndex: "2"}} className="constant-wrapper row">
           <div className="col s12 m4 l4">
             <div className="partial card hoverable" >
               <div className="card-content white-text" style={{"borderRadius":"20px" }}>
                 <span style={{"fontWeight": "bold"}} className="card-title center-align">Announcements</span>
                 <div className="divider"></div>
                {notifications}
               </div>
             </div>
           </div>
       <div className="col m6 hide-on-small-only"  ></div>
      </div>
    </div>
  </div>
  );
}
}

export default Intro;
