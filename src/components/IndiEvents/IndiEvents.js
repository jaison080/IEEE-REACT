import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './IndiEvents.css'
function IndiEvents(props){
   let newText = props.activeitem.description.split('\n').map((item, i) => {
      return <p key={i}>{item}</p>;
   });


   return(
       <div className="outer">
            <div class="light-blue-text text-darken-4 white">
                <h1 style={{"line-height":"74px"}}>Event Details</h1>
            </div>
            <nav>
                <div class="light-blue darken-4 nav-wrapper">
                    <div class="col s12">
                         <a onClick={props.closeHandler} style={{"cursor":"pointer"}} class="breadcrumb">Events</a>
                         <a  class="breadcrumb">{props.activeitem.title}</a>
                    </div>
                </div>
            </nav>

           <div className="top row">
               <div className="col s12 m12 l8">
                    <img class="responsive-img" style={{"width":"100%"}} src={require('../EventImages/'+ props.activeitem.img_src)}/>
               </div>
               <div className="inform col s12 m12 l4">
                    <p className="head"><i className="material-icons left">explore</i> {props.activeitem.location}</p>
                    <p className="head"><i className="material-icons left">event</i> {props.activeitem.date}</p>
                    <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {props.activeitem.type}</p>
                </div>
           </div>
           <div>

                    <div style={{ "text-align": "center", "transition": "all 0.3s linear", "padding-right": "50px", "padding-left": "50px"}} className="heading">
                        <h2 className="head">{props.activeitem.title}</h2>
                    </div>

           </div>

           <div className="container">

                <div style={{ "text-align": "justify", "padding-bottom": "100px", "padding-right": "50px", "padding-left": "50px", "color": "#777777"}} className="heading">
                    {newText}
                </div>
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
