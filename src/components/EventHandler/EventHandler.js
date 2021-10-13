import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { NavLink, Redirect} from "react-router-dom"

import axios from 'axios';
import Loader from '../PreLoader/Preloader';
function EventHandler() {
    
      const [buffer, setBuffer] = React.useState({
        current_buffer:"upcoming",
        color_prev:"",
        color_upc:"active #01579b light-blue darken-4",
        type: 0,
      });
      const [items, setItems] = React.useState(null);
      const [error,setError ] = React.useState(null);
      React.useEffect(() => {
        axios.get(`/events/${buffer.current_buffer}`).then((data)=>{
           setItems(data.data);
        }).catch((err)=>{
          setError(err);
        });
      }, [buffer]);
      if(error) return <Redirect to="/404" />
      if (!items) return (<Loader/>);
      return (
        <div className="app">
        <div  style={{ marginTop: "15em"}}>
            <div class="row">
            <h1 className="light-blue-text text-darken-4 center">Events</h1>
            <div className="row">
              <div className="col s12 l12 m12 xl12 center">
                <ul class="pagination center">
                  <li class={`waves-effect large ${buffer.color_upc}`}><a href = " " onClick={(e) => {setBuffer({current_buffer:"upcoming", color_upc:"active #01579b light-blue darken-4",color_prev:"", type: 1});e.preventDefault();}} >Upcoming</a></li>
                  <li class={`waves-effect large ${buffer.color_prev}`}><a href = " " onClick={(e) => {setBuffer({current_buffer:"previous", color_prev:"active #01579b light-blue darken-4",color_upc:"", type:0});e.preventDefault();}} >Previous</a></li>
                </ul>
              </div>
            </div>
              {
                items.map((item, i) =><div>

                <ul>
                  {
                  <li>
        <div class="col s12 m4" key={item.id}>
        <div style={{"borderRadius": "20px"}} className="card hoverable">
        <NavLink to={`/events/${buffer.current_buffer}/${i}`}>
          <div style={{"borderRadius": "20px"}} className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={require('../EventImages/'+ item.img_src)} alt={item.title} />
            <div style={{"paddingBottom": "0px"}} className="card-title">
            <span className="flow-text" style={{"fontWeight": "bolder", "fontSize": "4vh"}}>{item.title}</span>
            <p style={{"marginBottom": "10px", "fontSize": "16px"}}>View More » </p>
            </div>
          </div>
        </NavLink>
          </div>
        </div>
  
                  </li>
                  }
                </ul>
  
              </div>)
              }
            </div>
          </div>
        </div>
      );
      }

    export default EventHandler;