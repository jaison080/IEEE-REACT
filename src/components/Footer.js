  import React from 'react';
import "../css/footer.css"

function Landing() {
  return (
    <footer className="page-footer light-blue darken-4">
          <div id="top_margin" className=" light-blue darken-4 white-text">

    <div className='contact container' id="centre_mobile">
      <div className="row" id="contact">
        <div className="col s12 m12 l4">
          <div className="section">
            <img className="responsive-img" src={require("../assets/SB_logo_white.png")} alt="IEEe MEC SB LOGO" />
            <div className="divider"></div>
            <div style={{"paddingTop": "20px", "textAlign": "justify"}}>
              <p>Blue skies and ignited minds, the student branch of IEEE at Govt. Model Engineering College, the IEEE SB MEC in professional parlance, is on a perfect take-off with a growing number of dedicated and vibrant volunteers.</p>
            </div>
          </div>

        </div>
        <div className="col s12 m12 l4 center-align" id='message-box'>
        <div className="message_box">

					</div>
						</div>



        <div className="col s12 m4 margin_top_mobile">
          <h4 id="bottom_margin">Follow Us</h4>
          <div className="divider"></div>
          <div className="col s12 m10">

          <div style={{"paddingTop": "20px"}} className="row white-text">
            <div className="col s2 m2 l2"><a href="https://www.facebook.com/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab circle fa-facebook"></i></a></div>
            <div className="col s2 m2 l2"><a href="https://twitter.com/IEEEMEC"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab circle fa-twitter"></i></a></div>
            <div className="col s2 m2 l2"><a href="https://www.linkedin.com/company/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab circle fa-linkedin"></i></a></div>
            <div className="col s2 m2 l2"><a href="https://www.instagram.com/ieeemec/"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab circle fa-instagram"></i></a></div>
            <div className="col s2 m2 l2"><a href="https://medium.com/@ieee_mec_sb"  style={{'color':'#ffffff'}} id="icon_space"><i className="fab circle fa-medium"></i></a></div>
          </div>

          <div className="row margin_top_mobile">
            <h4>Contact Us</h4>
            <div className="divider"></div>
            <p> IEEE Students Branch, <br/>Govt. Model Engineering College, <br/>Thrikkakara, Kochi, Kerala.<br/>PIN: 682021
            </p>
            <p className="all-copy" > <i className="tiny material-icons">email</i> Email: ieee@mec.ac.in</p>
          </div>
        </div>
</div>

      </div>
    </div>

    <div className="extra_bottom">

    </div>

    </div>
          <div className="footer-copyright">
            <div style={{"textAlign": "center"}} className="container">
            Copyright <i className="tiny material-icons">copyright</i> 2019-20 IEEE Student Branch MEC
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
  )
}

export default Landing;
