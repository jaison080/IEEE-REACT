import React, { Component } from 'react';
import achievements from "./achievements.json"

class Achievemts extends Component {
  render() {
    return (
      <div>
        <div class="row">
  
          {
            achievements.map((item, i) => <div>
  
              <ul>
                {
                <li>
      <div class="col s12 m4">
        <div class="card small">
          <div class="card-image">
          <img src={require("../main1.jpg")} />
                <span class="card-title">{item.title}</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a onClick={console.log(i)}>This is a link</a>
          </div>
        </div>
      </div>
              
                </li>
                }
              </ul>
  
            </div>)
          }
        </div>
      </div>
   
    );
  }
}

export default Achievemts;