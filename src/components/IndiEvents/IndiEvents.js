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
                <h1 style={{"lineHeight":"74px"}}>Event Details</h1>
            </div>
            <nav>
                <div class="light-blue darken-4 nav-wrapper">
                    <div class="col s12">
                         <a href=" " onClick={props.closeHandler} style={{"cursor":"pointer"}} class="breadcrumb">Events</a>
                         <a  href=" " class="breadcrumb">{props.activeitem.title}</a>
                    </div>
                </div>
            </nav>

           <div className="top row">
               <div className="col s12 m12 l8">
                    <img class="responsive-img" style={{"width":"100%"}} src={require('../EventImages/'+ props.activeitem.img_src)} alt={props.activeitem.title} />
               </div>
               <div className="inform col s12 m12 l4">
                    <p className="head"><i className="material-icons left">explore</i> {props.activeitem.location}</p>
                    <p className="head"><i className="material-icons left">event</i> {props.activeitem.date}</p>
                    <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {props.activeitem.type}</p>
                </div>
           </div>
           <div>

                    <div style={{ "textAlign": "center", "transition": "all 0.3s linear", "paddingRight": "50px", "paddingLeft": "50px"}} className="heading">
                        <h2 className="head">{props.activeitem.title}</h2>
                    </div>

           </div>

           <div className="container">

                <div className="center-align heading" style={{ "textAlign": "justify", "paddingBottom": "100px", "color": "#777777"}} >
                    {newText}
                    <div className="center-align"><a className={`center-align btn-large ${props.activeitem.reg}`} href={props.activeitem.link} >Register ></a></div>
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
