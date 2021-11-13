import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Fade from 'react-reveal/Fade';
import './Execom.css'
function Execom() {
    document.body.classList.add("no-scroll")
    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible')
        M.Collapsible.init(elems, {hoverEnabled: false});
    }, []);
    
    const [nav, setNav] = useState(false)
    var toggleButton = (
            <Fade left cascade>
                <ul style={{position: "fixed", left: "0px", border: "2px"}} class="right">
                    <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(true)}} style={{marginLeft: "0", minWidth: "100px", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", minHeight: "100px"}} className ="z-depth-1 valign-wrapper white ">
                        <div className="light-blue-text text-darken-4" style={{minWidth: "100px", MarginLeft: "0", height: "100%", }}>{"   "}<span> Previous <br/> Years</span></div>
                    </a>
                </ul>
            </Fade>
        )
       var menu =  (<div style={{height: "100%"}} className="col">
                    <Fade left cascade>
                        <div style={{position: "fixed"}} >
                            <ul style={{borderRadius: "20px", minWidth: "20vw"}} class="collection with-header hoverable">
                                <li class="collection-header"><h4>Year</h4></li>
                                <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(false)}} class="collection-item active">2021</a>
                                <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(false)}} class="collection-item">2020</a>
                                <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(false)}} class="collection-item">2019</a>
                                <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(false)}} class="collection-item">2018</a>
                            </ul>
                        </div>
                    </Fade>
                </div>)
    return(
            <div style={{ marginTop: "15em"}} className="row center-align" >
            <div>
                <div className="row light-blue-text text-darken-4">
                {nav === true?menu:toggleButton}
                    <div>
                    <div style={{ textAlign: "center", paddingBottom: "100px", paddingRight: "50px", paddingLeft: "50px"}}>
                        <h1>Student Branch</h1>

                        <div class="divider"></div>
                    </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/Christina.jpg")} alt="Chair" />
                            <h5>Christina Ann Zachariah</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/VC.jpg")} alt=" Vice Chair" />
                            <h5>Anuvinda Krishnan</h5>
                            <p> Vice Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/Secretary.jpg")} alt="Secretary" />
                            <h5>Anand Raj</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/gokul.jpg")} alt="Treasurer" />
                            <h5>Gokul</h5>
                            <p> Treasurer</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/Link_rep.jpg")} alt="Link Representative" />
                            <h5>Amith Tony Joseph</h5>
                            <p> Link Representative</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/MDC.jpg")} alt="Membership Development Ccoordinator" />
                            <h5>Vinu</h5>
                            <p> Membership Development Coorinator</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/AC.jpg")} alt="Activities Coordinator" />
                            <h5>Sreehari</h5>
                            <p> Activity Coordinator</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250pxx", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/pp.jpg")} alt="Design Head" />
                            <h5>Adil Rafeek</h5>
                            <p> Design Head</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250pxx", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/Content_head.jpg")} alt="Content Head" />
                            <h5>Samyuktha</h5>
                            <p> Content Head</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/TC.jpg")} alt="Technical Coordinator" />
                            <h5>Amaya Sam</h5>
                            <p> Technical Coordinator</p>
                        </div>
                    </div>
                    </div>
                    <div className="row light-blue-text text-darken-4">
                    <div style={{ "text-align": "center", "padding-bottom": "100px", "padding-left": "20px", "padding-right": "40px"}}>
                        <h2>Computer Society</h2>
                        <div class="divider"></div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/CS_chair.jpg")} alt="CS Chair" />
                            <h5>Malavika S Menon</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/CS_secretary.jpg")} alt="CS Secretatry" />
                            <h5>Bharath Srinivasan</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                    </div>
                    <div className="row light-blue-text text-darken-4">
                    <div style={{"text-align": "center", "padding-top": "100px", "padding-bottom": "100px", "padding-left": "20px", "padding-right": "40px"}}>
                        <h2>Signal Processing Society</h2>
                        <div class="divider"></div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/SPS_chair.jpg")} alt="SPS Chair" />
                            <h5>Shyama</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/SPS_secretary.jpg")} alt="SPS Secretary" />
                            <h5>Mukund C Menon</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                    </div>
                    <div className="row light-blue-text text-darken-4">
                    <div style={{"text-align": "center", "padding-top": "100px", "padding-bottom": "100px", "padding-left": "20px", "padding-right": "40px"}}>
                        <h2>Industry Applications Society</h2>
                        <div class="divider"></div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/PES_chair.jpg")} alt="IAS Chair" />
                            <h5>Aparna</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/IAS_secretary.jpg")} alt="IAS Secretary" />
                            <h5>Serene</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                    </div>
                    <div className="row light-blue-text text-darken-4">
                    <div style={{"text-align": "center", "padding-top": "100px", "padding-bottom": "100px", "padding-left": "20px", "padding-right": "40px"}}>
                        <h2>Women in Engineering Affinity Group</h2>
                        <div class="divider"></div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/WiE_chair.jpg")} alt="WIE Chair" />
                            <h5>Poornima</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/WiE_secretary.jpg")} alt="WIE Secretary" />
                            <h5>Anjali Suresh</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                    </div>
                    <div className="row light-blue-text text-darken-4">
                    <div style={{"text-align": "center", "padding-top": "100px", "padding-bottom": "100px", "padding-left": "20px", "padding-right": "40px"}}>
                        <h2>Power & Energy Society</h2>
                        <div class="divider"></div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/PES_chair.jpg")} alt="PES Chair" />
                            <h5>Aparna</h5>
                            <p> Chairperson</p>
                        </div>
                    </div>
                    <div  className="col s12 m6 l4">
                        <div className="container">
                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={require("./Execom_Photos/PES_secretary.jpg")} alt="PES Secretary" />
                            <h5>Gowri Lakshmi</h5>
                            <p> Secretary</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    )
}

export default Execom;
