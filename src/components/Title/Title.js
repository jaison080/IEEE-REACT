import React from  'react';
import { useEffect } from 'react';
import './Title.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import image from '../../neon.jpg';

const Parallax = () => {
    useEffect(() => {
		let parallel = document.querySelector('.parallax');
		M.Parallax.init(parallel, {});

	}, [])
    return(
            <div class="parallax-container">
                <div class="parallax"><img src={image} /></div>
            </div>
    )
}

export default Parallax;