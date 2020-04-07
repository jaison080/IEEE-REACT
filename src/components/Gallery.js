import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import "../css/gallery.css";

const Gallery = () => {

	useEffect(()=>{
		var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
	})

	return (
		<div className='gallery' id="gallery">
			<div className="container center">
				<h3 className='light-blue-text text-darken-3 center-align' id="bottom_margin">Gallery</h3>
				<div class="row">
					<div class="col s12 m4" id="bottom_margin">
						<img style={{ 'background-size':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/1.jpg")} alt="" className="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m4" id="bottom_margin">
						<img style={{  'background-size':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/8.jpg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m4">
						<img style={{ 'background-size':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/7.jpg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>

				</div>
				<div class="row">

					<div class="col s12 m4" id="bottom_margin">
						<img style={{ 'background-size':'cover' , 'height':'35vh', 'margin':'auto' }} src={require("../assets/6.jpg")} alt="" class="materialboxed responsive-img hidepic"  id="curve_border"/>
					</div>

					<div class="col s12 m4" id="bottom_margin">
						<img style={{ 'background-size':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/5.jpg")} alt="" class="materialboxed responsive-img mobile_space hidepic"  id="curve_border"/>
					</div>
					<div class="col s12 m4" id="bottom_margin">
						<img style={{ 'background-size':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/2.jpg")} alt="" class="materialboxed responsive-img mobile_space hidepic"  id="curve_border"/>
					</div>
					{/*<div className="col s12 m4" id="curve_border">
						<div style={{ 'height': '35vh', 'width':'100%', 'text-align':'center', 'background-color':'black', 'color':'white', 'margin-top':'0'}} className="card-panel waves-effect" id="curve_border">
								<i className="material-icons right" style={{'margin-right':'45%', 'margin-top':'35%'}}>arrow_forward</i>
								<p style={{'margin-right':'auto', 'margin-top':'55%'}}>More</p>
						</div>
						</div>*/}
				</div>

			</div>
		</div>
	)
}

export default Gallery
