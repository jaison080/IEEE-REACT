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
          description:"ths is fnkn f ljisnlfblihbncilbncs",
          upcoming:false
        },
        current_upcoming:true,
        color_prev:"",
        color_upc:"active #01579b light-blue darken-4",

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

        const { current_upcoming } = this.state;
        const newItems = this.state.eventitems.filter(
          objects => objects.upcoming === current_upcoming
        );
        return (
          <div>
            <div class="row">
            <h1 className="light-blue-text text-darken-4 center">Events</h1>
            <div className="row">
              <div className="col s12 l12 m12 xl12 center">
                <ul class="pagination center">
                  <li class={`waves-effect large ${this.state.color_prev}`}><a href="#!" onClick={() => this.setState({current_upcoming:false, color_prev:"active #01579b light-blue darken-4",color_upc:""})} >Previous</a></li>
                  <li class={`waves-effect large ${this.state.color_upc}`}><a href="#!"onClick={() => this.setState({current_upcoming:true, color_upc:"active #01579b light-blue darken-4",color_prev:""})} >Upcoming</a></li>
                </ul>
              </div>
            </div>
            {/*<div className="row">
              <div className="col s6 m6 l6 " >
                <a class={`waves-effect waves-light btn right ${this.current_upcoming ? "#01579b light-blue darken-4" : "#e0e0e0 grey lighten-2"} `} onClick={() => this.setState({current_upcoming:false})} >Previous Events</a>
                </div>
                <div className="col s6 m6 l6 " >
                <a class={`waves-effect waves-light btn left ${this.current_upcoming ? "#e0e0e0 grey lighten-2" : "#01579b light-blue darken-4"} `} onClick={() => this.setState({current_upcoming: true})} >Upcoming Events</a>
                </div>
             
        </div>*/}

              {
                newItems.map((item, i) => <div class="col s12 m4" key={events.id}>

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
