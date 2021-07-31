import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './IndiEvents.css'
import { NavLink } from "react-router-dom"
function IndiEvents(props){
   let newText = props.activeitem.description.split('\n').map((item, i) => {
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
                            <NavLink to="/events" onClick={props.closeHandler} style={{"cursor":"pointer"}} class="breadcrumb" >Events</NavLink>
                            {props.activeitem.title.length > 25 ? <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{props.activeitem.title.slice(0,22) + "..."}</a>: <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{props.activeitem.title}</a>}
                        </div>
                    </div>
                </nav>
            </div>

           <div className="top row">
               <div className="col s12 m6 l6">
                    <img class="responsive-img hoverable" style={{"width":"100%", "borderRadius": "20px"}} src={require('../EventImages/'+ props.activeitem.img_src)} alt={props.activeitem.title} />
               </div>
               <div className="inform col s12 m6 l6">
                    <div style={{"transition": "all 0.3s linear", "paddingRight": "10px", "paddingLeft": "10px", "textAlign": 'left'}} className="heading">
                        <h2 className="head">{props.activeitem.title}</h2>
                        <br/>
                        <div style={{"paddingLeft":"10px"}}>
                        <p className="head"><i className="material-icons left">explore</i> {props.activeitem.location}</p>
                        <p className="head"><i className="material-icons left">event</i> {props.activeitem.date}</p>
                        <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {props.activeitem.type}</p>
                        <br/>
                        <div className="heading" style={{ "textAlign": "left", "paddingBottom": "100px", "color": "#777777"}} >
                            {newText}
                            {props.activeitem.reg === true? <div style={{"paddingTop": "30px"}} className="center-align"><a className="center-align btn-large light-blue darken-4 waves-effect waves-light" href={props.activeitem.link} >Register »</a></div>: null }
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
export default IndiEvents


/*

pic
date
name
location
description

*/
