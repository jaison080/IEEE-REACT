import React , {useState} from  'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Carousel.css';
import info from './society.json' 
const Society = () => {
  const [active, setActive] = useState(0);
  
  return(
    <div id="society" className="container carousel">
        <h2 className="light-blue-text text-darken-4 center">Our Soceties and Affinity Groups</h2>
        <br/><br/>
        <div className="row">
            <div className="col s12 m6 l6">
              <div className="row">
                <div className="col s2 m2 l2"></div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(1)}>
                  <img src={require("./Images/CS.jpeg")} alt="" className="responsive-img"/>
                </div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(2)}>
                  <img src={require("./Images/IAS.jpeg")} alt="" className="circle responsive-img"/>
                </div>
              </div>
              <div className="row">
              <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(3)}>
                  <img src={require("./Images/PES.jpeg")} alt="" className="circle responsive-img"/>
                </div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4">
                  <h4 className="flow-text center-align light-blue-text text-darken-4">Click the logos to view more</h4>
                </div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(4)}>
                  <img src={require("./Images/SPS.jpeg")} alt="CS" className="circle responsive-img"/>
                </div>
              </div>
              <div className="row">
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(5)}>
                  <img src={require("./Images/embs.png")} alt="IEEE EMBS" className="circle responsive-img"/>
                </div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(6)}>
                  <img src={require("./Images/WiE.jpeg")} alt="Computer Society" className="circle responsive-img"/>
                </div>
                <div style={{borderRadius: "50%"}} className="col s4 m4 l4 waves-effect hoverable" onClick={() => setActive(7)}>
                  <img src={require("./Images/SIGHT.jpeg")} alt="IEEE SIGHT" className="circle responsive-img"/>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div style={{"transition": "all 0.3s linear", "paddingRight": "10px", "paddingLeft": "20px", "textAlign": 'center'}} className="heading">
                          <h3 className="head">{info[active].name}</h3>
                          <br/>
                          <div className="flowtext" style={{ "textAlign": "left", "paddingBottom": "100px", "color": "#777777"}} >{info[active].desc}</div>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Society;
