import React from 'react';
import "./Events.css"
import events from "./events.json"

function Event() {

  return (
    <div>
      <h1>Events</h1>
      <div class="row">

        {
          events.map((item) => <div>

            <ul>
              {
              item.events.map((sub) => <li>
    
    
  
    
    <div class="col s12 m4">
      <div class="card small">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
 
            



{/*}
    <div class="col s12 m4">
      <div class="card blue-grey darken-1" style={{'width':'90%','margin':'auto', 'margin-bottom':'3em'}}>
        <div class="card-content white-text">
          <span class="card-title">{sub.name}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/gallery">{sub.img_link}</a>
          <a href="/">This is a link</a>
        </div>
    </div>

              </div>*/}
            
              </li>)
              }
            </ul>

          </div>)
        }
      </div>
    </div>
  );
};



export default Event;