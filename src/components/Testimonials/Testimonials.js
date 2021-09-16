import React, { Component } from "react";
import "./Testimonials.css";
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";
// import M from "materialize-css";

export default class Testimonials extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, { height: 750 });
        });
    }
    render() {
        return (
            <div className="slider-container">
                <div class="slider">
                    <ul class="slides">
                        <li>
                            <div className="slider-window-container">
                                <div className="slider-content-00">
                                    <i class="fas fa-quote-right" id="quote"></i>
                                    <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </h3>
                                </div>
                                {/* <div className="pointer"></div> */}
                                <div className="slider-content-01">
                                    <div className="testimonial-image"></div>
                                    <div className="content-details">
                                        <h4>Nathan Abraham</h4>
                                        <p>Secertary 2014</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="slider-window-container">
                                <div className="slider-content-00">
                                    <i class="fas fa-quote-right" id="quote"></i>
                                    <h3>It was one of the best experiences in my life</h3>
                                </div>
                                <div className="slider-content-01">
                                    <div className="testimonial-image"></div>
                                    <div className="content-details">
                                        <h4>John Koshy</h4>
                                        <p>Chairperson 2012</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="slider-window-container">
                                <div className="slider-content-00">
                                    <i class="fas fa-quote-right" id="quote"></i>
                                    <h3>IEEE was an amazing Experience</h3>
                                </div>
                                <div className="slider-content-01">
                                    <div className="testimonial-image"></div>
                                    <div className="content-details">
                                        <h4>Ipsum Lorem</h4>
                                        <p>Vice Chair 2015</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-window-container">
                                <div className="slider-content-00">
                                    <i class="fas fa-quote-right" id="quote"></i>
                                    <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </h3>
                                </div>
                                <div className="slider-content-01">
                                    <div className="testimonial-image"></div>
                                    <div className="content-details">
                                        <h4>Lorem Ipsum</h4>
                                        <p>Chairperson 2010</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}