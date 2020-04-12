import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

const NotFoundPage= () => {
      useEffect(() => {
      let parallel = document.querySelector('.parallax');
      M.Parallax.init(parallel, {});

    }, [])
    return (
      <div className="parallax-container hello center-align">
        <div className="parallax"><img className="responsive-img" style={{"minHeight": "0.01%"}} src={require("./404.png")} alt="404 Not Found" /></div>
        <div style={{ "position": "sticky", "top" : "79%" }} id="nfb">
        <a href=" " className="waves-effect waves-light light-blue darken-4 btn notfoundbutton" id="g"><i className="material-icons left">arrow_back</i><Link to="/" style={{'color':'white'}} >Back</Link></a>
        </div>
      </div>
    );
}
export default NotFoundPage;
