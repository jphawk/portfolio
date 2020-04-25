import React from 'react';
import WavyFooter from '../../images/wavy-footer.svg';

function Follow() {
    return (
        <div id="follow" className="follow">
            <div className="plx"></div>
            <div className="follow-container">
                <div className="follow-links">
                    <h2>{'Follow me on Social Media ♡'}</h2>
                    <a href="https://www.linkedin.com/in/elena-kazakova-uxdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/elena.hawk" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>  
                <img src= {WavyFooter} alt="Follow me"/>
            </div>
            
        </div>
    );
  }
  
  export default Follow;
  