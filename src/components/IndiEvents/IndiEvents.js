import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';


function IndiEvents(props){
   return(
       <div className="outer">
           <div className="row">
               <div className="col l12">
               
               <img class="responsive-img" style={{"width":"100%"}} src={require('../EventImages/'+ props.activeitem.img_src +'.jpg')}/>
            
               </div>
           </div>
           <div className="row">
               <div className="col l12">
               
               <div style={{ "text-align": "center", "padding-bottom": "100px", "padding-right": "50px", "padding-left": "50px"}} className="heading">
               <h1>{props.activeitem.title}</h1>
                </div>
            
               </div>
           </div>
           <div className="row">
               <div className="col m4 s12">
               <p>{props.activeitem.date}</p>
                </div>
                <div className="col m4 s12">
               <p>{props.activeitem.location}</p>
                </div>
                <div className="col m4 s12">
               <p>{props.activeitem.type}</p>
                </div>
           </div>
           <div className="row">
               <div className="col l12">
               
               <div style={{ "text-align": "center", "padding-bottom": "100px", "padding-right": "50px", "padding-left": "50px"}} className="heading">
               <p>{props.activeitem.description}</p>
            </div>
            
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