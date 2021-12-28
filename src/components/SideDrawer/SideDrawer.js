import React from 'react';
import "./SideDrawer.css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom"

import Fade from 'react-reveal/Fade';

var drawer_elt = {
    "width": "100%",
    "text-align": "left"
}

const sideDrawer= props=>(
<Fade right >
    <nav className="side-drawer  white light-blue-text text-darken-4">
        <div className="close_sd">
            <button className="closer white waves-effect" onClick={props.closeClickHandler}>
                <i className="material-icons itag light-blue-text text-darken-4">chevron_right</i>
            </button>
        </div>

        <Fade right cascade >
        <div>
        <ul classname="no-copy" >
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link className="valign-wrapper" to="/" activeStyle={{color:"white"}}><i style={{"paddingRight":"5px"}} className="material-icons">home</i>Home</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link className="valign-wrapper" to="/execom" activeStyle={{color:"white"}}><i style={{"paddingRight":"5px"}} className="material-icons">group</i>Execom</Link></li>
            {/* <li onClick={props.closeClickHandler} style={drawer_elt}><Link className="valign-wrapper" to="/achievements" activeStyle={{color:"white"}}><i style={{"paddingRight":"5px"}} className="material-icons">redeem</i>Achievements</Link></li> */}
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link className="valign-wrapper" to="/timeline" activeStyle={{color:"white"}}><i style={{"paddingRight":"5px"}} className="material-icons">timeline</i>Timeline</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link className="valign-wrapper" to="/events" activeStyle={{color:"white"}}><i style={{"paddingRight":"5px"}} className="material-icons">event</i>Events</Link></li>
        </ul>
        </div>
        </Fade>
    </nav>
    </Fade>

)

export default sideDrawer
