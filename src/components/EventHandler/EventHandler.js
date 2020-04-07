import React, { Component } from 'react';
import events from "./events.json"
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
                this.state.eventitems.map((item, i) => <div class="col s12 m4" key={events.id}>
      
                  <ul>
                    {
                    <li>
          
          <div>
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={require('../EventImages/'+ item.img_src +'.jpg')} />
              </div>
              <div class="card-content">  
                <span class="card-title activator grey-text text-darken-4">{item.title}<i class="material-icons right wave-effect">expand_less</i></span>
                <a class="waves-effect waves-blue btn-flat" onClick={() =>this.eventToggleClickHandler(item)}>View Details</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{item.title}<i class="material-icons right">expand_more</i></span>
                <p class="truncate">{item.description}</p>
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
