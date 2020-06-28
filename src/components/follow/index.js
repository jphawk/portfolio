import React from 'react';

function Follow(props) {
    return (
        <div id="follow" className="follow animation">
            <div className="bottom-particles">
                {[...Array(50)].map((i, key) =>
                    <div className="bubble" key={key}></div>
                )}
            </div>
            <div className={props.page === "main" ? "follow-container width" : "follow-container"}>
                <div className="follow-background">
                    <div className="follow-links">
                        <h2>{'Follow me on Social Media ♡'}</h2>
                        <a href="https://www.linkedin.com/in/elena-kazakova-uxdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/elena.hawk" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="mailto:eo_kazakova@yahoo.com" title="Email" target="_blank" rel="noopener noreferrer">or <b>Email Me</b></a>
                    </div>  
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Follow;
  