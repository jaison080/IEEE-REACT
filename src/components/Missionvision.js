import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
const Missionvision = () => {
    var para = {
        "font-size": "17px",
        "padding-bottom":"20px"
    }
    var just = {
        "text-align": "center"
    }
    return (
    <div style={just} className="row light-blue darken-4">
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
            <i style={{"padding-top":"20px"}} className="large material-icons white-text">priority_high</i>
                <div className="container white-text">
                    <span className="flow-text">What is IEEE?</span>
                    <p style={para}>The Institute of Electrical and Electronic Engineers (IEEE) is a global association and organization of professionals working toward the development, implementation and maintenance of technology-centered products and services.</p>
                </div>
            </div>
        </div>
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
                <i style={{"padding-top":"20px"}} className="large material-icons white-text">visibility</i>
                <div className="container white-text">
                    <span className="flow-text">Vision</span>
                    <p style={para}>The IEEE SB MEC takes forward the vision of IEEE by providing students a platform to enhance their technical and professional acumen.  It aims to promote interest in cutting-edge technologies and provides numerous networking opportunities to help its members along their career path. Serving as a centre for honing one’s volunteering skills, the Student Branch has promoted many of its members to the hub level and more. The SB also creates opportunities  for the budding technocrats to learn, share and explore new possibilities in the field of technology</p>
                </div>
            </div>
        </div>
        <div className="col s12 m12 l4">
            <div className="light-blue darken-4">
                <i style={{"padding-top":"20px"}} className="large material-icons white-text">room</i>
                <div className="container white-text">
                    <span className="flow-text">Mission</span>
                    <p style={para}>The IEEE SB MEC takes forward the vision of IEEE by providing students a platform to enhance their technical and professional acumen.  It aims to promote interest in cutting-edge technologies and provides numerous networking opportunities to help its members along their career path. Serving as a centre for honing one’s volunteering skills, the Student Branch has promoted many of its members to the hub level and more. The SB also creates opportunities  for the budding technocrats to learn, share and explore new possibilities in the field of technology</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Missionvision;
