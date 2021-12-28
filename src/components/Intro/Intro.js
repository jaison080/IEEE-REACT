import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Intro.css'
import axios from 'axios';
import Loader from '../PreLoader/Preloader';

class Intro extends Component{
  state ={
    announcements: [],
    error: false,
    // hero: []
  }
  componentDidMount() {
    M.Carousel.init(this.Carousel, {
      fullWidth: true,
      indicators: true
    });
    M.Slider.init(this.Slider, {});
    axios.get('/notifications').then(data => {
      this.setState(() => ({ announcements: data.data }));
      this.setState(() => ({ error: false}))
    }).catch(() => {  
      this.setState(() => ({ error: true}))
    })
    // axios.get('/hero').then(data =>{
    //   this.setState(() => ({hero: data.data}))
    //   this.setState(() => ({ error: false}))
    // }).catch(() => {  
    //   this.setState(() => ({ error: true}))
    // })
  }
  render(){
    if (!this.state.announcements){
      return <Loader/>
    }
  else{
    let notifications = this.state.announcements.map((item, i) => {
      return <blockquote style={{"borderLeft":"5px solid #01579b", fontWeight: "bold"}} key={i}>{item.content} <a className="link" rel="noopener noreferrer" target='_blank' href={`https://${item.link}`}>Link »</a></blockquote>
    });
    
    return (
      <div style={{height: "100vh"}}>
        <div ref={Slider => {this.Slider = Slider;}} className="slider fullscreen">
        <ul className="slides">
          <li>
            <img src={`${axios.defaults.baseURL}/images/hero/mec.jpeg`} alt="Trial"/> 
            <div className="caption right-align">
              <h3>MEC Front View</h3>
              <h5 className="light grey-text text-lighten-3">Fornt view of MOdel Engineering College</h5>
            </div>
          </li> 
          <li>
            <img src={`${axios.defaults.baseURL}/images/hero/mec-aerial.jpg`} alt="Trial"/> 
            <div className="caption left-align">
              <h3>MEC Aerial</h3>
              <h5 className="light grey-text text-lighten-3">Aerial view of MEC showing it's layout structure that have a resemblance of that of aryabhatta satellite</h5>
            </div>
          </li>
          <li>
            <img src={`${axios.defaults.baseURL}/images/hero/magic.jpg`} alt="Trial"/> 
            <div className="caption right-align">
              <h3>M.A.G.I.C</h3>
              <h5 className="light grey-text text-lighten-3">The first edition of MEC Annual Gathering of IEEE Community</h5>
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
}

export default Intro;
