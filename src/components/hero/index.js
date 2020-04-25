import React from 'react';
import Wave from '../../images/wavy.svg';

function Hero() {
    return (
      <div className="hero">
        <div className="hero-pic">
        <img src={Wave} alt="Welcome to Elena's Portfolio <3, enjoy!" />
        <div className="hero-pic-text">
            <h1>Hello, I'm Elena</h1>
            <h2>UX Developer based in Helsinki</h2>
          </div>
        </div>
      </div>
    );
  }
  
export default Hero;
