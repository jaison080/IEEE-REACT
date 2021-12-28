import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Fade from 'react-reveal/Fade';
import './Execom.css'
import axios from 'axios';
import Loader from '../PreLoader/Preloader';
import LazyLoad from 'react-lazyload';
function Execom() {
    const [members, setMembers] = useState(null)
    const [year, setYear] = useState(null)  
    const [nav, setNav] = useState(false)
    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible')
        M.Collapsible.init(elems, {hoverEnabled: false});
    }, []);
    useEffect(() => {
        axios.get('/execom').then(
            data => {
                setMembers(data.data)
                console.log(Object.keys(data.data))

                setYear(Object.keys(data.data).slice(-1))
            }
        ).catch((err) => {
            console.log(err);
        })
    }, []);


    
    var toggleButton = (
            <Fade left cascade>
                <ul style={{position: "fixed", left: "0px", border: "2px"}} class="right">
                    <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(true)}} style={{marginLeft: "0", minWidth: "100px", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", minHeight: "100px"}} className ="z-depth-1 valign-wrapper white ">
                        <div className="light-blue-text text-darken-4" style={{minWidth: "100px", MarginLeft: "0", height: "100%", }}>{"   "}<span> Previous <br/> Years</span></div>
                    </a>
                </ul>
            </Fade>
        )
    if(!members || !year){
        return <Loader/>
    }
       var menu =  (<div style={{height: "100%"}} className="col">
                    <Fade left cascade>
                        <div style={{position: "fixed"}} >
                            <ul style={{borderRadius: "20px", minWidth: "20vw"}} class="collection with-header hoverable">
                                <li class="collection-header"><h4>Year</h4></li>
                                {
                                    Object.keys(members).reverse().map((item, i) => 
                                        <a href="#!" onClick={(e) =>{e.preventDefault(); setNav(false); setYear(item)}} className={year===item?"collection-item active":"collection-item"}>{item}</a>
                                    )
                                }
                            </ul>
                        </div>
                    </Fade>
                </div>)
    console.log(Object.keys(members))
    return(
            <div style={{ marginTop: "15em"}} className="row center-align" >
            <div>
                {nav === true?menu:toggleButton}
                {Object.entries(members[year]).map((item, i) => {
                    return(
                        <div className="row light-blue-text text-darken-4">
                            <div>
                            <div style={{ textAlign: "center", paddingBottom: "100px", paddingRight: "50px", paddingLeft: "50px"}}>
                                <h1>{item[0]}</h1>
                                <div class="divider"></div>
                            </div>
                            </div>
                                {Object.entries(item[1]).map((item, i) =>{
                                return( 
                                    <LazyLoad scroll={true}>
                                    <div className="col s12 m6 l4">
                                        <div className="container">
                                            <img style={{"imageOrientation": "from-image", "height": "250px", "width": "250px"}} className="circle responsive-img" src={`${axios.defaults.baseURL}/images/${item[1]["image"]}`} alt={item[0]} />
                                            <h5>{item[1]["Name"]}</h5>
                                            <p> {item[0]}</p>
                                        </div>
                                    </div>
                                    </LazyLoad>)
                                })}
                        </div>
                    )
                })}
            </div>
            </div>

    )
}

export default Execom;
