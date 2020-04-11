import React from 'react';
import img2 from "../../assets/parallax.png"
import notification_arr from './notifications.json'
import './Intro.css'

function Intro() {
  let notifications = notification_arr.map((item, i) => {
    return <blockquote style={{"border-left":"5px solid #01579b"}} key={notification_arr.index}>{item.content} <a className="link" href={item.link}>Link</a>>></blockquote>
  });
  return (
    <div id="intro">
    <div class="row" style={{"margin-bottom":"-0.36%"}}>
      <div className="col s12 m6">
        <div class="card white" style={{"borderRadius":"20px"}} >
          <div class="card-content light-blue-text text-darken-4 hoverable">
            <span style={{"font-weight": "bold"}} class="card-title">Announcements...</span>
            {notifications}
          </div>
        </div>
      </div>
      <div className="col m6 hide-on-small-only">
      <img src={img2} alt="" style={{"width":"100%"}}/>
      </div>
      <div style={{"width":"100%"}} className="col s12 m12">
        <img className="responsive-img" src={require("../../assets/kochi.jpg")} />
      </div>
    </div>
    </div>
  );
}

export default Intro;
