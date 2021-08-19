import React, { Component } from 'react';
import events from "./events.json"
import events_upcoming from "./events_upc.json"
import IndiEvents from "../IndiEvents/IndiEvents.js"
import 'materialize-css/dist/css/materialize.min.css';
import { NavLink} from "react-router-dom"

class EventHandler extends Component{
    state={
        ShowIndiEvents: false,
        activeitem:{
          index:0,
          type:"cs",
          title:"name of event",
          date:"20 november 2019",
          location:"knowhere",
          img_src:"somesource",
          description:"ths is fnkn f ljisnlfblihbncilbncs",
          reg: "disabled"
        },
        current_buffer:events_upcoming,
        color_prev:"",
        color_upc:"active #01579b light-blue darken-4",
        type: 0,
        eventitems: events,
      }

      renderItems=()=>{

        const newItems = this.state.current_buffer
        return (
          <div  style={{ marginTop: "15em"}}>
            <div class="row">
            <h1 className="light-blue-text text-darken-4 center">Events</h1>
            <div className="row">
              <div className="col s12 l12 m12 xl12 center">
                <ul class="pagination center">
                  <li class={`waves-effect large ${this.state.color_upc}`}><a href = " " onClick={(e) => {this.setState({current_buffer:events_upcoming, color_upc:"active #01579b light-blue darken-4",color_prev:"", type: 1});e.preventDefault();}} >Upcoming</a></li>
                  <li class={`waves-effect large ${this.state.color_prev}`}><a href = " " onClick={(e) => {this.setState({current_buffer:events, color_prev:"active #01579b light-blue darken-4",color_upc:"", type:0});e.preventDefault();}} >Previous</a></li>
                </ul>
              </div>
            </div>
              {
                newItems.map((item, i) =><div>

                <ul>
                  {
                  <li>
        <div class="col s12 m4" key={events.id}>
        <div style={{"borderRadius": "20px"}} className="card hoverable">
        <NavLink to={`/events/${this.state.type}/${i}`}>
          <div style={{"borderRadius": "20px"}} className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={require('../EventImages/'+ item.img_src)} alt={item.title} />
            <div style={{"paddingBottom": "0px"}} className="card-title">
            <span className="flow-text" style={{"fontWeight": "bolder", "fontSize": "4vh"}}>{item.title}</span>
            <p style={{"marginBottom": "10px", "fontSize": "16px"}}>View More » </p>
            </div>
          </div>
        </NavLink>
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


      render(){
        let MianEvents;
      if(this.state.ShowIndiEvents){
        MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} activeitem={this.state.activeitem}/>
      }
      else{
        MianEvents=<this.renderItems/>;
      }

      return (
        <div className="app">


         {MianEvents}

        </div>
      );
      }
    }

    export default EventHandler;