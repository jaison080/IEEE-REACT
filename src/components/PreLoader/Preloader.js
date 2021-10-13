import React from "react";
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

const Preloader = () => {

    return (
        <div style={{height: "100vh", width: "100vw"}} className=" valign-wrapper" >
        <div style={{height: "10vh", width: "10vh", left: "45%"}}  className=" center-align preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
            <div className="circle"></div>
            </div><div className="gap-patch">
            <div className="circle"></div>
            </div><div className="circle-clipper right">
            <div className="circle"></div>
            </div>
        </div>
        </div>
        </div>
    )

}

export default Preloader;