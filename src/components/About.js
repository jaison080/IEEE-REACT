import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import mec from '../MEC.jpeg'
import sb from '../SB.jpg'
import Fade from 'react-reveal/Fade';
const About = () => {
  var stcard = {
    "borderRadius" : "30px"
  }
  var stimage = {
    "borderTopLeftRadius" : "30px",
    "borderTopRightRadius" : "30px"
  }
    return(
   <div className="row">
     <Fade left>
      <div className="col s12 m12 l6">
         <div style={stcard} className="card light-blue darken-4">
           <div style={stimage} className="card-image">
             <img style={stimage} src={mec} alt=""/>
             <span className="card-title">About MEC</span>
           </div>
           <div className="card-content white-text">
             <p>Govt Model Engineering College is a premier institute that has empowered its students to pave way for excellence and innovation in the field of engineering and technology. Affiliated to the Kerala Technological University, it was the first engineering college to be established by the Government of Kerala under the aegis of the Institute of Human Resources (IHRD). Ever since its inception, the college has maintained its eminence as a leading Engineering College in the state. The college ranks amongst the top-level colleges in the country in terms of the quality of the graduates and placement statistics. With such eminence in the academics and curricular activities, MEC is one of the most sought after engineering colleges in the state.</p>
           </div>
         </div>
       </div>
       </Fade>
       <Fade right>

       <div className="col s12 m12 l6">
         <div style={stcard} className="card light-blue darken-4">
            <div style={stimage} className="card-image">
             <img style={stimage} src={sb} alt=""/>
            <div/>
             <span className="card-title">About SB</span>
           </div>
           <div className="card-content white-text">
             <p>Fiery hearts and curious minds, the student branch of IEEE MEC SB is the perfect blend of dedicated, vibrant volunteers, along with creative and brilliant tech enthusiasts. With over 3 state-level flagship events and over a dozen tech-based and managerial events, workshops, and seminars throughout the year, the IEEE MEC Student Branch ensures that each member is able to be a part of something greater. Today, with a crew of 150 plus members, IEEE MEC SB stands tall, as one among the best student branches in the state.</p>
           </div>
         </div>
       </div>
       </Fade>
  </div>
    )
}
export default About;
