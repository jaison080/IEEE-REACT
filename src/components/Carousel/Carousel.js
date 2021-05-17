import React from  'react';
import M from 'materialize-css'
import './Carousel.css';
const Carousel = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });
  return(

  <div id='society'>
  <h3 className="center-align light-blue-text text-darken-4">Our Societies</h3>
  <div class="row">
    <div class="col s4 m4 l2">
      <div class="card white z-depth-0">
        <div class="card-image">
          <img src={require("./Images/CS.jpeg")} alt="CS" />
          <a class="btn-floating halfway-fab waves-effect waves-light orange modal-trigger" href="#modal1"><i class="material-icons">radio_button_unchecked</i></a>
          
          <div id="modal1" class="modal">
    <div class="modal-content">
      <h4 className="center-align light-blue-text text-darken-4">IEEE Computer Society</h4>
      <p>IEEE Computer Society (sometimes abbreviated the Computer Society or CS) is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose and scope is "to advance the theory, practice, and application of computer and information processing science and technology" and the "professional standing of its members."[2] </p>
    </div>
    
  </div>
        
        
      </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
      <div class="card white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/SPS.jpeg")} alt="SPS" />
        <a class="btn-floating halfway-fab waves-effect waves-light green modal-trigger" href="#modal2"><i class="material-icons">radio_button_unchecked</i></a>
        <div id="modal2" class="modal">
    <div class="modal-content">
      <h4 className="center-align light-blue-text text-darken-4">IEEE Signal Porcessing Society</h4>
      <p>The IEEE Signal Processing Society is a society of the IEEE. It is also known by the acronym IEEE SPS. In the hierarchy of IEEE, the Signal Processing Society is one of close to 40 technical societies organized under the IEEE's Technical Activities Board.[1] The IEEE Signal Processing Society is IEEE's first technical Society.</p>
    </div>
    
  </div>
        
        
        
      </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/PES.jpeg")} alt="PES" />
        <a class="btn-floating halfway-fab waves-effect waves-light black modal-trigger" href="#modal3"><i class="material-icons">radio_button_unchecked</i></a>
        <div id="modal3" class="modal">
    <div class="modal-content">
      <h4 className="center-align light-blue-text text-darken-4">IEEE PES</h4>
      <p>The IEEE Power and Energy Society (IEEE PES), formerly the IEEE Power Engineering Society, is the oldest society of the Institute of Electrical and Electronics Engineers (IEEE) focused on the scientific and engineering knowledge about electric power and energy.[1][2][3]</p>
    </div>
    
  </div>
        
        
        
      </div>
    </div>
  </div>
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/WiE.jpeg")} alt="WIE" />
        <a class="btn-floating halfway-fab waves-effect waves-light purple darken-3 modal-trigger" href="#modal4"><i class="material-icons">radio_button_unchecked</i></a>
        <div id="modal4" class="modal">
    <div class="modal-content">
      <h4 className="center-align light-blue-text text-darken-4">IEEE Woman In Engineering</h4>
      <p>
IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects nearly 20,000 members in over 100 countries to advance women in technology at all points in their life and career. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity.</p>
    </div>
    
  </div>
        
        
       
      </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/IAS.jpeg")} alt="IAS" />
        <a class="btn-floating halfway-fab waves-effect waves-light  green darken-4 modal-trigger" data-target="modal5"><i class="material-icons">radio_button_unchecked</i></a> 
        <div id="modal5" class="modal">
    <div class="modal-content">
      <h4 className="center-align light-blue-text text-darken-4">IEEE IAS</h4>
      <p>
The Industry Applications Society, as a transnational organization, is interested in advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture and application of electrical systems, apparatus, devices and controls to the processes and equipment of industry and commerce; promotion of safe, reliable and economic installations</p>
    </div>
    
  </div>
      </div>
    </div>
  </div>  
  </div>
  
  </div>
  )
}
export default Carousel;
