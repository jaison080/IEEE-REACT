import React from 'react';
import img1 from "../assets/ieee-logo.png"
import img2 from "../assets/parallax.png"


function Intro() {
  return (
    <div id="intro">
    <div class="row" style={{"margin-left":"10%","margin-right":"10%","margin-bottom":"10%"}}>
      <div className="col s12 m6">
        <img src={img1} alt="" style={{"width":"80%"}}/>
        <p>The IEEE SB MEC takes forward the vision of IEEE by providing students a platform to enhance their technical and professional acumen.  It aims to promote interest in cutting-edge technologies and provides numerous networking opportunities to help its members along their career path. Serving as a centre for honing one’s volunteering skills, the Student Branch has promoted many of its members to the hub level and more. The SB also creates opportunities  for the budding technocrats to learn, share and explore new possibilities in the field of technology</p>
      </div>
      <div className="col s12 m6">
      <img src={img2} alt="" style={{"width":"100%"}}/>
      </div>
    </div>
    </div>
  );
}

export default Intro;
