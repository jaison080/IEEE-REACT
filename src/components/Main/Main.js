import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar.js'

import SideDrawer from '../SideDrawer/SideDrawer.js'

import Footer from '../Footer.js'


class Main extends Component {

  state = {
    SideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }; // for opening the sidebar
    });
  };
  closeToggleClickHandler = () => {
    this.setState({ SideDrawerOpen: false }); // for closing the sidebar
  }
  render() {
    let adrawer;
    if (this.state.SideDrawerOpen) {
      adrawer = <SideDrawer closeClickHandler={this.closeToggleClickHandler} />;
    }

    return (
      <div className="App" id="first">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

        {adrawer}

        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
