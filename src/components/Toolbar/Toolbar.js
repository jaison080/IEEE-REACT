import React from  'react';
import './Toolbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import { Link } from "react-router-dom"


const toolbar= props =>(
    <div style={{"margin-bottom":"15em"}}>
    <div className="meta-nav" style={{"top": "0px", "position": "fixed", "z-index": "5", "width": "100%"}}>
	    	<p id="ieee-meta-a">
                <a href="https://www.ieee.org/index.html">IEEE.org</a> 
                &#160;|&#160; 
                <a href="https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp">IEEE <em>Xplore</em> Digital Library</a> 
                &#160;|&#160; 
                <a href="https://standards.ieee.org/">IEEE Standards</a> 
                &#160;|&#160; 
                <a href="https://spectrum.ieee.org/">IEEE Spectrum</a> 
                &#160;|&#160; <a href="https://www.ieee.org/sitemap.html">More Sites</a>
                <a href="https://ieee.org">
                <img className="meta-ieee-logo" src={"https://www.ieee.org/content/dam/ieee-global/images/ieee_mb_white.png"} alt="IEEE.org" width="auto" height="20" />
                </a>
            </p>
   	    </div>
    <header className="toolbar_a">
        <nav className="toolbar_navigation">
           
            <div className="toolbar_logo"><a href="/"><img style={{"width": "200px", "padding-top": "20px"}} className="responsive-img" src={require("../../assets/SB_logo.png")} /></a></div>
            <div className="hi"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><Link to="/" activeStyle={{color:"white"}}>Home</Link></li>
                        <li><Link to="/execom" activeStyle={{color:"white"}}>Execom</Link></li>
                        <li><Link to="/achievements" activeStyle={{color:"white"}}>Achievements</Link></li>
                        <li><Link to="/gallery" activeStyle={{color:"white"}}>Gallery</Link></li>
                        <li><Link to="/events" activeStyle={{color:"white"}}>Events</Link></li>
                    </ul>
                </div>
                <div className="drawer_toggle">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
    </div>

);

export default toolbar;