import React from "react";
import "./Toolbar.css";
import "materialize-css/dist/css/materialize.min.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";
import { NavLink } from "react-router-dom";

const toolbar = (props) => (
  <div style={{ marginBottom: "15em" }}>
    <div
      className="meta-nav"
      style={{ top: "0px", position: "fixed", zIndex: "5", width: "100%" }}
    >
      <p id="ieee-meta-a">
        <a href="https://www.ieee.org/index.html">IEEE.org</a>
        &#160;|&#160;
        <a href="https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp">
          IEEE <em>Xplore</em> Digital Library
        </a>
        &#160;|&#160;
        <a href="https://standards.ieee.org/">IEEE Standards</a>
        &#160;|&#160;
        <a href="https://spectrum.ieee.org/">IEEE Spectrum</a>
        &#160;|&#160; <a href="https://www.ieee.org/sitemap.html">More Sites</a>
        <a href="https://ieee.org">
          <img
            className="meta-ieee-logo"
            src={
              "https://www.ieee.org/content/dam/ieee-global/images/ieee_mb_white.png"
            }
            alt="IEEE.org"
            width="auto"
            height="20"
          />
        </a>
      </p>
    </div>
    <header className="toolbar_a">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <a href="/">
            <img
              style={{ width: "200px", paddingTop: "20px" }}
              className="responsive-img"
              src={require("../../assets/SB_logo.png")}
              alt="IEEE MEC SB LOGO"
            />
          </a>
        </div>
        <div className="hi" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{ borderBottom: "solid 6px #01579b" }}
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/execom"
                activeStyle={{
                  borderBottom: "solid 6px #01579b",
                }}
              >
                Execom
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                activeStyle={{
                  borderBottom: "solid 6px #01579b",
                }}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                activeStyle={{
                  borderBottom: "solid 6px #01579b",
                }}
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                activeStyle={{
                  borderBottom: "solid 6px #01579b",
                }}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="drawer_toggle">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>

  </div>
);

export default toolbar;
