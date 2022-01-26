import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
const Missionvision = () => {
    var para = {
        "fontSize": "17px",
        "paddingBottom":"20px"
    }
    var just = {
        "textAlign": "center"
    }
    return (
    <div style={just} className="row light-blue darken-4">
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
            <i style={{"paddingTop":"20px"}} className="large material-icons white-text">help</i>
                <div className="container white-text">
                    <span className="flow-text">What is IEEE?</span>
                    <p style={para}>IEEE is one of the world’s largest technical professional organizations dedicated to advancing technology for the benefit of humanity. The IEEE provides learning opportunities within the engineering sciences, research, and technology.</p>
                </div>
            </div>
        </div>
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
                <i style={{"paddingTop":"20px"}} className="large material-icons white-text">visibility</i>
                <div className="container white-text">
                    <span className="flow-text">Vision</span>
                    <p style={para}>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
                </div>
            </div>
        </div>
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
                <i style={{"paddingTop":"20px"}} className="large material-icons white-text">room</i>
                <div className="container white-text">
                    <span className="flow-text">Mission</span>
                    <p style={para}>IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Missionvision;
