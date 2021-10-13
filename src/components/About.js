import React from 'react';
import "../css/aboutMEC.css";
// import jQuery  from 'jquery';
const About = () => {
  return (
    <div className="mec">
    <div className="adj container row"> 
        <div className="col s12 m12 l6">
        <div className="stuff card">
          <div className="card-content">
          <span style={{paddingBottom:"10px"}} className="align-center card-title">About MEC</span>
          <div className="divider"></div>
            <p style={{paddingTop:"20px"}} className="white-text">Govt Model Engineering College is a premier institute that has empowered its students to pave way for excellence and innovationin the field of engineering and technology. Affiliated to the Kerala Technological University, it was the first engineering college to be established by the Government of Kerala under the aegis of the Institute of Human Resources (IHRD). Ever since its inception, the college has maintained its eminence as a leading Engineering College in the state. The college ranks amongst the top-level colleges in the country in terms of the quality of the graduates and placement statistics. With such eminence in the academics and curricular activities, MEC is one of the most sought after engineering colleges in the state.</p>
          </div>
        </div>
        </div>
        <div className="col s12 m12 l6">
        <div className="stuff card">
          <div className="card-content">
          <span style={{paddingBottom:"10px"}} className="align-center card-title">About IEEE MEC SB</span>
          <div className="divider"></div>
            <p style={{paddingTop:"20px"}} className="white-text">Fiery hearts and curious minds, the student branch of IEEE MEC SB is the perfect blend of dedicated, vibrant volunteers, along with creative and brilliant tech enthusiasts. With over 3 state-level flagship events and over a dozen tech-based and managerial events, workshops, and seminars throughout the year, the IEEE MEC Student Branch ensures that each member is able to be a part of something greater. Today, with a crew of 150 plus members, IEEE MEC SB stands tall, as one among the best student branches in the state.</p>
          </div>
          </div>
          </div>
      </div>
      {/* <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div> */}
    </div>
  );
};
export default About;
