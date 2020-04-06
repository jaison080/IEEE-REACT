import React, { Component } from 'react';
import events from "../Events/events.json"
//import MainPage from "../Events/Events.js"
import IndiEvents from "../IndiEvents/IndiEvents.js"
import 'materialize-css/dist/css/materialize.min.css';


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
          description:"ths is fnkn f ljisnlfblihbncilbncs" 
        },
        eventitems: events,
        
      }
      
      eventToggleClickHandler = (obj) =>{
       // this.setState({activeitem:obj, ShowIndiEvents: !ShowIndiEvents})
        this.setState((prevState)=>{
          return {ShowIndiEvents: !prevState.ShowIndiEvents,activeitem:obj}; 
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({ShowIndiEvents: false}); 
      }

      renderItems=()=>{
        return (
          <div>
            <div class="row">
      
              {
                this.state.eventitems.map((item, i) => <div key={events.id}>
      
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
                <p>{item.date}</p>
              </div>
              <div class="card-action">
                <a class="waves-effect waves-teal btn-flat" onClick={() =>this.eventToggleClickHandler(item)}>View Details</a>
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
