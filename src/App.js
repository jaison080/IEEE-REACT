import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js';
import './App.css';
import Execom from './components/Execom/Execom.js'
// import Contacts from  './components/Contacts/Contacts.js'
import Achievements from './components/Achievements/Achievements.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer.js'
import Timeline from './components/Timeline/Timeline'
import NotFound from './components/NotFoundPage/NotFoundPage.js'
import EventHandler from './components/EventHandler/EventHandler.js'
import IndiEvents from './components/EventHandler/IndiEvents'

// import Fade from 'react-reveal/Fade';
class App extends Component {
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
  ad = () => {
    return this.state.SideDrawerOpen;
  }

  render() {
    let adrawer;
    if (this.state.SideDrawerOpen) {
      adrawer = <SideDrawer current={this.ad} closeClickHandler={this.closeToggleClickHandler} />;
    }
    return (
      <div className="app">
        {/* <div className="credentials">
      <Cred/>
    </div> */}
        <BrowserRouter>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

          {adrawer}


          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/events" component={EventHandler} />
            <Route exact path="/events/:type/:id" render={(props) => <IndiEvents{...props} />} />
            <Route path="/execom" component={Execom} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/timeline" component={Timeline} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
