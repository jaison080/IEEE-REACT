import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js';
import './App.css';
import Execom from './components/Execom/Execom.js'
// import Events from  './components/Events/Events.js'
import Contacts from  './components/Contacts/Contacts.js'
import Achievements from './components/Achievements/Achievements.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer.js' 
import Gallery from './components/Gallery.js'
import NotFound from './components/NotFoundPage/NotFoundPage.js'
import EventHandler from './components/EventHandler/EventHandler.js'
// import Cred from './components/IEEE-credentials/credentials.js'
class App extends Component {
  state={
    SideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen}; // for opening the sidebar
    });
  };
  closeToggleClickHandler= ()=>{
    this.setState({SideDrawerOpen: false}); // for closing the sidebar
  }
  
  
  render(){
    let adrawer;  
  if(this.state.SideDrawerOpen){
    adrawer=<SideDrawer closeClickHandler={this.closeToggleClickHandler}/>;
  }
  
  return (
    <div className="app">
    {/* <div className="credentials">
      <Cred/>
    </div> */}
    <BrowserRouter >
     <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
     
     {adrawer}
    
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/events" component={EventHandler}/>
        <Route path="/execom" component={Execom}/>
        <Route path="/achievements" component={Achievements}/>    
        <Route path="/gallery" component={Gallery}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
      <Footer/>
    </div>
  );
  }
}

export default App;
