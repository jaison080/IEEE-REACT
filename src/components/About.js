import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import mec from "../MEC.jpeg";
import sb from "../SB.jpg";
import Fade from "react-reveal/Fade";
import aerialMEC from "../AerialMEC.jpg";
import "../css/aboutMEC.css";

const About = () => {
  return (
    <div className="mainn">
      <div className="mec row valign-wrapper">
        <div className="stuff col s10 m5 l4">
          <h2>About MEC</h2>
          <span class="white-text">
            <p>
              Govt Model Engineering College is a premier institute that has
              empowered its students to pave way for excellence and innovation
              in the field of engineering and technology. Affiliated to the
              Kerala Technological University, it was the first engineering
              college to be established by the Government of Kerala under the
              aegis of the Institute of Human Resources (IHRD). Ever since its
              inception, the college has maintained its eminence as a leading
              Engineering College in the state. The college ranks amongst the
              top-level colleges in the country in terms of the quality of the
              graduates and placement statistics. With such eminence in the
              academics and curricular activities, MEC is one of the most sought
              after engineering colleges in the state.
            </p>
          </span>
        </div>

        <div class="stuff col s10 m5 l4">
          <h2>About SB</h2>
          <span class="white-text">
            <p>
              Fiery hearts and curious minds, the student branch of IEEE MEC SB
              is the perfect blend of dedicated, vibrant volunteers, along with
              creative and brilliant tech enthusiasts. With over 3 state-level
              flagship events and over a dozen tech-based and managerial events,
              workshops, and seminars throughout the year, the IEEE MEC Student
              Branch ensures that each member is able to be a part of something
              greater. Today, with a crew of 150 plus members, IEEE MEC SB
              stands tall, as one among the best student branches in the state.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
