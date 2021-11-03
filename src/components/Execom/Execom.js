import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
function Execom() {
    useEffect(() => {
        const elems = document.querySelectorAll('.fixed-action-btn')
        M.FloatingActionButton.init(elems, {hoverEnabled: false});
    }, []);
    return(
            <div style={{ marginTop: "15em"}} className="center-align" >
                <div class="fixed-action-btn">
                    <a href=" " onClick={(e) => {e.preventDefault()}} class="btn-floating btn-large red">
                        <i style={{transform: 'rotate(0)'}} class="large material-icons waves-effect" >keyboard_arrow_up</i>
                    </a>
                    <ul>
                        <li><a href=" " onClick={(e) => {e.preventDefault()}} class="btn-floating btn-large red">'20</a></li>
                        <li><a href=" " onClick={(e) => {e.preventDefault()}} class="btn-floating btn-large yellow darken-1">'21</a></li>
                        <li><a href=" " onClick={(e) => {e.preventDefault()}} class="btn-floating btn-large green">'22</a></li>
                        <li><a href=" " onClick={(e) => {e.preventDefault()}} class="btn-floating btn-large blue">'23</a></li>
                    </ul>
                </div>
            <div className="row light-blue-text text-darken-4">
            <div>
            <div style={{ "textAlign": "center", "paddingBottom": "100px", "paddingRight": "50px", "paddingLeft": "50px"}} className="">
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

    )
}

export default Execom;
