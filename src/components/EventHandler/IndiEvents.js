import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './IndiEvents.css'
import events_prev from "./events.json"
import events_upcoming from "./events_upc.json"
import { NavLink, Redirect } from "react-router-dom"

function IndiEvents(props){
    let events = [events_prev, events_upcoming]
    if(events.length <= props.match.params.type || events[props.match.params.type].length <= props.match.params.id){
        return <Redirect to="/events" />
    }
    let newText = events[props.match.params.type][props.match.params.id].description.split('\n').map((item, i) => {
      return <p key={i}>{item}</p>;
    });
   return(
       <div style={{ marginTop: "2.5em"}} className="outer">
            <div class="top light-blue-text text-darken-4 white">
                <h1 style={{"lineHeight":"74px"}}>Event Details</h1>
            </div>
            <div style={{"maxWidth": "10cm", "borderRadius": "20px"}} className="top">
                <nav style={{"borderRadius": "20px"}}>
                    <div style={{"borderRadius": "20px"}} className="hoverable  light-blue darken-4 nav-wrapper">
                        <div className="center-align">
                            <NavLink to="/events"  style={{"cursor":"pointer"}} class="breadcrumb" >Events</NavLink>
                            {events[props.match.params.type][props.match.params.id].title.length > 25 ? <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{events[props.match.params.type][props.match.params.id].title.slice(0,22) + "..."}</a>: <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{events[props.match.params.type][props.match.params.id].title}</a>}
                        </div>
                    </div>
                </nav>
            </div>

           <div className="top row">
               <div className="col s12 m6 l6">
                    <img class="responsive-img hoverable" style={{"width":"100%", "borderRadius": "20px"}} src={require('../EventImages/'+ events[props.match.params.type][props.match.params.id].img_src)} alt={events[props.match.params.type][props.match.params.id].title} />
               </div>
               <div className="inform col s12 m6 l6">
                    <div style={{"transition": "all 0.3s linear", "paddingRight": "10px", "paddingLeft": "10px", "textAlign": 'left'}} className="heading">
                        <h2 className="head">{events[props.match.params.type][props.match.params.id].title}</h2>
                        <br/>
                        <div style={{"paddingLeft":"10px"}}>
                        <p className="head"><i className="material-icons left">explore</i> {events[props.match.params.type][props.match.params.id].location}</p>
                        <p className="head"><i className="material-icons left">event</i> {events[props.match.params.type][props.match.params.id].date}</p>
                        <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {events[props.match.params.type][props.match.params.id].type}</p>
                        <br/>
                        <div className="heading" style={{ "textAlign": "left", "paddingBottom": "100px", "color": "#777777"}} >
                            {newText}
                            {events[props.match.params.type][props.match.params.id].reg === true? <div style={{"paddingTop": "30px"}} className="center-align"><a className="center-align btn-large light-blue darken-4 waves-effect waves-light" href={events[props.match.params.type][props.match.params.id].link} >Register »</a></div>: null }
                        </div>
                    </div>
                    </div>
                </div>
           </div>
           <div>

           </div>

        </div>
    )


    }
export default IndiEvents;