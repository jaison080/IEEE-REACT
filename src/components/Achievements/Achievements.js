import React, { Component } from 'react';
import achievements from "./achievements.json";


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
      <div style={{"borderRadius": "20px"}} className="card hoverable">
      <a>
        <div style={{"borderRadius": "20px"}} className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={require('../main1.jpg')} alt={item.title} />
          <div style={{"paddingBottom": "0px"}} className="card-title">
          <span style={{"fontWeight": "bolder", "fontSize": "35px"}}>{item.title}</span>
          <p style={{"marginBottom": "10px", "fontSize": "16px"}}>View More » </p>
          </div>
        </div>
      </a>
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
