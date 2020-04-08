import React from 'react';
import "./SideDrawer.css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom"
var drawer_elt = {
    "width": "100%",
    "text-align": "left"
}

const sideDrawer= props=>(

    <nav className="side-drawer  white light-blue-text text-darken-4">
        <div className="close_sd">
            <button className="closer white waves-effect" onClick={props.closeClickHandler}>
                <i className="material-icons itag light-blue-text text-darken-4">chevron_right</i>
            </button>
        </div>
        <ul>
            <li style={drawer_elt}><Link to="/" activeStyle={{color:"white"}}>Home</Link></li>
            <li style={drawer_elt}><Link to="/execom" activeStyle={{color:"white"}}>Execom</Link></li>
            <li style={drawer_elt}><Link to="/achievements" activeStyle={{color:"white"}}>Achievements</Link></li>
            <li style={drawer_elt}><Link to="/gallery" activeStyle={{color:"white"}}>Gallery</Link></li>
            <li style={drawer_elt}><Link to="/events" activeStyle={{color:"white"}}>Events</Link></li>
        </ul>
    </nav>


)

export default sideDrawer
