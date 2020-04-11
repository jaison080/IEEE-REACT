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
        <ul>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link to="/" activeStyle={{color:"white"}}>Home</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link to="/execom" activeStyle={{color:"white"}}>Execom</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link to="/achievements" activeStyle={{color:"white"}}>Achievements</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link to="/gallery" activeStyle={{color:"white"}}>Gallery</Link></li>
            <li onClick={props.closeClickHandler} style={drawer_elt}><Link to="/events" activeStyle={{color:"white"}}>Events</Link></li>
        </ul>
        </div>
        </Fade>
    </nav>
    </Fade>

)

export default sideDrawer
