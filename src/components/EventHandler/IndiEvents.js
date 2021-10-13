import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './IndiEvents.css'
import { NavLink, Redirect } from "react-router-dom"
import axios from 'axios';
import Loader from '../PreLoader/Preloader';
function IndiEvents(props){
    const [event, setEvent] = React.useState(null)
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        axios.get(`/events/${props.match.params.type}`).then((data) => {
            setEvent(data.data)
        }).catch((err) => {
            setError(err)
        })
    }, [props.match.params.type])
    if(error) return <Redirect to="/404" />
    if (!event) return (<Loader />);
    if (event.length <= props.match.params.id) return <Redirect to="/404" />
    let newText = event[props.match.params.id].description.split('\n').map((item, i) => {
      return <p key={i}>{item}</p>;
    });
   return(
       <div style={{ marginTop: "2.5em"}} className="outer">
            <div class="top light-blue-text text-darken-4 white">
                <h1 style={{"lineHeight":"74px"}}>Event Details</h1>
            </div>
            <div style={{"maxWidth": "10cm", "borderRadius": "20px"}} className="top">
                <nav style={{"borderRadius": "20px"}}>
                    <div style={{"borderRadius": "20px"}} className="hoverable  light-blue darken-4 nav-wrapper">
                        <div className="center-align">
                            <NavLink to="/events"  style={{"cursor":"pointer"}} class="breadcrumb" >Events</NavLink>
                            {event[props.match.params.id].title.length > 25 ? <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{event[props.match.params.id].title.slice(0,22) + "..."}</a>: <a href=" " onClick={(e) =>{e.preventDefault()}} class="breadcrumb">{event[props.match.params.id].title}</a>}
                        </div>
                    </div>
                </nav>
            </div>

           <div className="top row">
               <div className="col s12 m6 l6">
                    <img class="responsive-img hoverable" style={{"width":"100%", "borderRadius": "20px"}} src={require('../EventImages/'+ event[props.match.params.id].img_src)} alt={event[props.match.params.id].title} />
               </div>
               <div className="inform col s12 m6 l6">
                    <div style={{"transition": "all 0.3s linear", "paddingRight": "10px", "paddingLeft": "10px", "textAlign": 'left'}} className="heading">
                        <h2 className="head">{event[props.match.params.id].title}</h2>
                        <br/>
                        <div style={{"paddingLeft":"10px"}}>
                        <p className="head"><i className="material-icons left">explore</i> {event[props.match.params.id].location}</p>
                        <p className="head"><i className="material-icons left">event</i> {event[props.match.params.id].date}</p>
                        <p className="head"><i className="material-icons left">keyboard_arrow_right</i> {event[props.match.params.id].type}</p>
                        <br/>
                        <div className="heading" style={{ "textAlign": "left", "paddingBottom": "100px", "color": "#777777"}} >
                            {newText}
                            {event[props.match.params.id].reg === true? <div style={{"paddingTop": "30px"}} className="center-align"><a className="center-align btn-large light-blue darken-4 waves-effect waves-light" href={event[props.match.params.id].link} >Register »</a></div>: null }
                        </div>
                    </div>
                    </div>
                </div>
           </div>
           <div>

           </div>

        </div>
    )


    }
export default IndiEvents;