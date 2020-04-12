import React, { Component } from 'react';
import events from "./events.json"
//import MainPage from "../Events/Events.js"
import IndiEvents from "../IndiEvents/IndiEvents.js"
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';


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
            <h1 className="light-blue-text text-darken-4">Events</h1>
            <ul class="pagination">
              <li class="disabled"><a href=" "><i class="material-icons">chevron_left</i></a></li>
                  <li class="active light-blue darken-4"><a href=" " >Older events</a></li>
                  <li class="waves-effect"><a href=" "><Link to='/upcoming' >Upcoming Events</Link></a></li>
                  <li class="waves-effect"><a href=" "><Link to='/upcoming' ><i class="material-icons">chevron_right</i></Link></a></li>
             </ul>

              {
                this.state.eventitems.map((item, i) => <div class="col s12 m4" key={events.id}>

                  <ul>
                    {
                    <li>

          <div>
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('../EventImages/'+ item.img_src)} alt="item.title" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item.title}<i class="material-icons right wave-effect">expand_less</i></span>
                <a href=" " className="waves-effect waves-blue btn-flat" onClick={() =>this.eventToggleClickHandler(item)}>View Details</a>
              </div>
              <div style={{"color": "#777777"}} className="card-reveal">
                <span className="card-title">{item.title}<i class="material-icons right">expand_more</i></span>
                <p>{item.description.split('\n')[0]}..</p>
                <p className="head"><i className="material-icons left">explore</i> {item.location}</p>
                <p className="head"><i className="material-icons left">event</i> {item.date}</p>
                <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {item.type}</p>
                <a href=" " className="waves-effect waves-blue btn-flat" onClick={() =>this.eventToggleClickHandler(item)}>Read More ></a>
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
