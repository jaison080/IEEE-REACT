  import React from 'react';
import "../css/footer.css"

function Landing() {
  return (
    <footer style={{"paddingTop": "0px"}} className="page-footer white">
          <div id="top_margin" className=" light-blue darken-4 white-text">

    <div className='container' id="centre_mobile">
      <div className="row" id="contact">
        <div className="col s12 m4 l4" id='dupar_margin'>
          <div className="section">
          <div class="light-blue darken-4 ">
             <div class="card-content white-text">
            <img className="responsive-img" src={require("../assets/SB_logo_white.png")} alt="IEEE MEC SB LOGO" />
            <div className="divider"></div>
            <div style={{"paddingTop": "0px", "textAlign": "justify"}}>
              <p id='size_change' class='flow-text'>Blue skies and ignited minds, the student branch of IEEE at Govt. Model Engineering College, the IEEE SB MEC in professional parlance, is on a perfect take-off with a growing number of dedicated and vibrant volunteers.</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="col s12 m4 l4 center-align" id='message-box'>
        <div className="message_box">
        <div class="row">
    <div class="col s12 m12 l12" id='upar_margin'>
      <div class="card light-blue darken-4 join hoverable">
        <div class="card-content white-text">
          <span class="card-title" id="bottom_margin"><b>Join IEEE</b></span>
          <div className="divider" ></div>
          <div style={{"paddingTop": "5px"}} className="row white-text"></div>
          <p id='size_change'>If you are interested in joining IEEE or any of it's societies, please follow the instructions in the link given below</p>
        </div>
        <div class="card-action round">
        <a href="https://www.ieee.org/membership/join/" target="_blank" rel="noopener noreferrer"  class="btn waves-effect waves orange" type="Join" name="action">Join
    <i class="material-icons right">send</i>
  </a>
        </div>
      </div>
    </div>
  </div>
					</div>
						</div>

    <div class="col s12 m4 margin_top_mobile light-blue darken-4 " id='upar_margin'>
      <div class="card-content white-text">

    
          <h4 id="bottom_margin">Follow Us</h4>
          <div className="divider"></div>
          <div className="col s12 m12">

          <div style={{"paddingTop": "20px"}} className="row white-text">
            <div className="col s2 m4 l2"><a href="https://www.facebook.com/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab fa-facebook fa-2x"></i></a></div>
            <div className="col s2 m4 l2"><a href="https://twitter.com/IEEEMEC"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab fa-twitter fa-2x"></i></a></div>
            <div className="col s2 m4 l2"><a href="https://www.linkedin.com/company/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab fa-linkedin fa-2x"></i></a></div>
            <div className="col s2 m4 l2"><a href="https://www.instagram.com/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab fa-instagram fa-2x"></i></a></div>
            <div className="col s2 m4 l2"><a href="https://medium.com/@ieee_mec_sb"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab fa-medium fa-2x"></i></a></div>
          </div>

          <div className="row margin_top_mobile">
            <h4 id="bottom_margin">Contact Us</h4>
            <div className="divider"></div>
            <p id='zuper_margin'> IEEE Student Branch, <br/>Govt. Model Engineering College, <br/>Thrikkakara, Kochi, Kerala.<br/>PIN: 682021
            </p>
            <a style={{"color": "white"}} href="mailto:ieee@mec.ac.in" > <i className="tiny material-icons">email</i> Email: ieee@mec.ac.in</a>
            </div>
            </div>

            
      
    </div>
        </div>
        </div> 
    </div>
    

    <div className="divider light-blue darken-4" >

    </div>

    </div>
          <div style={{"padding": "0px"}} className="footer-copyright light-blue darken-4">
            <div style={{"textAlign": "center"}} className="container  white-text ">
            <p>Copyright <i className="tiny material-icons" >copyright</i> 2022 IEEE Student Branch MEC</p>
            </div>
          </div>
        </footer>
  )
}

export default Landing;
