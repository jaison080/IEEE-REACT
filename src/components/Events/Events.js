import React, { Component } from 'react';
import events from "./events.json"



function Event(props) {

      return (
        <div>
          <div class="row">
    
            {
              events.map((item, i) => <div>
    
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
              <a>View Details</a>
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
    };


   
  export default Event;


/*

class EventHandler extends Component{
  state={
      ShowMainEvents: true,
      index: 0,
      
    }
    
    eventToggleClickHandler = (ind) =>{
      this.setState({index: ind})
      this.setState((prevState)=>{
        return {ShowMainEvents: !prevState.ShowMainEvents}; // for opening the sidebar
      });
    };
    closeToggleClickHandler= ()=>{
      this.setState({ShowMainEvents: false}); 
    }

    render(){
*/

/*
 function IndiEvents(props){
        
   
   
       }
    
    
      
    
      let MianEvents; 
    if(this.state.ShowMainEvents){
      MianEvents=<Event eventClickHandler={this.eventToggleClickHandler}/>;
    }
    else{
      MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} ind={this.state.index}/>
    }
    
    return (
      <div className="app">

       
       {MianEvents}
      
      </div>
    );
    }
  }
  */
