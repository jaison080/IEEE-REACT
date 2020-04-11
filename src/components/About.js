import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import mec from '../MEC.jpeg'
import sb from '../SB.jpg'
import Fade from 'react-reveal/Fade';
const About = () => {
  var stcard = {
    "border-radius" : "30px"
  }
  var stimage = {
    "border-top-left-radius" : "30px",
    "border-top-right-radius" : "30px"
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
             <p>Blue skies and ignited minds, the student branch of IEEE at Govt. Model Engineering College, the IEEE SB MEC in professional parlance, is on a perfect take-off with a growing number of dedicated and vibrant volunteers. The SB has forged itself through thick and thin, successfully proving their mettle, over the years. Today, with a crew of 150 plus members, IEEE SB MEC stands out as one among the best of all student branches in the hub.</p>
           </div>
         </div>
       </div>
       </Fade>
  </div>
    )
}
export default About;