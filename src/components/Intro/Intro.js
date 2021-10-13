import React from 'react';
import img2 from "../../assets/mec.jpeg"
import notification_arr from './notifications.json'
import './Intro.css'
import Fade from 'react-reveal/Fade';

function Intro() {
  let notifications = notification_arr.map((item, i) => {
    return <blockquote style={{"borderLeft":"5px solid #01579b"}} key={i}>{item.content} <a className="link" href={item.link}>Link »</a></blockquote>
  });

  return (
    <div style={{"height": "100vh"}}id="intro">
    <div id="inner" className="valign-wrapper backdrp ">
      <div style={{ marginTop: "10em", width: "100%"}} className="row">
    <Fade>
      <div className="space col s12 m4">

        <div className="partial card white " style={{"borderRadius":"20px" }} >
          <div className="card-content light-blue-text text-darken-4" style={{"borderRadius":"20px" }}>
            <span style={{"fontWeight": "bold"}} className="card-title center-align">Announcements</span>
            <div className="divider"></div>
            {notifications}
          </div>
        </div>

      </div>
        </Fade>
      <div className="col m6 hide-on-small-only"  >
      {/* <img src={img2} style={{"width":"100%", "borderRadius":"20px" }} alt="Announcements"/> */}
      </div>


      {/* <div style={{"width":"100%"}} className="col s12 m12">
        <img className="responsive-img" src={require("../../assets/kochi.jpg")} alt="Govt.model Engineering College" />
      </div> */}
    </div>
    </div>
    </div>
  );
}

export default Intro;
