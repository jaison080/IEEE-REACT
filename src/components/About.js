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
            <p style={{paddingTop:"20px"}} className="white-text">Model Engineering College is one of the topmost engineering colleges in Kerala. The campus beholds the legacy of experience through exposure. Numerous technical and non-technical activities are promoted in the college along with a rich academic background. With numerous activities and opportunities provided by the various student communities, students can develop their skills in their desired field.</p>
          </div>
        </div>
        </div>
        <div className="col s12 m12 l6">
        <div className="stuff card">
          <div className="card-content">
          <span style={{paddingBottom:"10px"}} className="align-center card-title">About IEEE MEC SB</span>
          <div className="divider"></div>
            <p style={{paddingTop:"20px"}} className="white-text">The IEEE Student Branch of Model Engineering College is filled with active volunteers. Numerous technical activities and competitions are organized by MEC SB throughout the year. By collaborating with various other organizations and student branches, MEC SB stands by its name through the precision and uniqueness of its performance. IEEE MEC SB aims to create a networking environment for its members through a wide range of opportunities in different areas of technology.</p>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};
export default About;
