import React from "react";
import "./Landing.css";
import Typewriter from 'typewriter-effect';
import flash from "./../../assets/hero.png";
const Landing = () =>{
    return(
        <div className="landing-container"> 
            <div className="landing-left" data-aos="fade-right">
                <p className="landing-text">Can You Type ...</p>
                <div className="typewriter-container">
                <Typewriter options={{strings: ['Fast?', 'Quick?', 'Correct?'],
                autoStart: true,
                loop: true,}}/>
                </div>
            </div>
            <div className="landing-right" data-aos="fade-left">
                <img src={flash} alt="Flash Image" className="hero-img" />
            </div>
        </div>
    );
}

export default Landing ;