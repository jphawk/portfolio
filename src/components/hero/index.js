import React from 'react';

function Hero(props) {
    return (
      <div className="hero">
        <div className="bottom-particles">
          {[...Array(50)].map((i) =>
            <div className="bubble" key={i}></div>
          )}
        </div>
        { props.page === "main" && 
          <div className="hero-container">
            <div className="hero-text">
              <div className="background">
                <h1>Hello, I'm Elena</h1>
                <h2>a UX Developer based in Helsinki</h2>
              </div>
            </div>
          </div>
        }
        { props.page === "about" && 
          <div className="hero-text nomain">
            <div className="background">
              <h1>About Me</h1>
            </div>
          </div>
        }
        { props.page === "work" && 
          <div className="hero-text nomain">
            <div className="background">
              <h1>My Work</h1>
            </div>
          </div>
        }
      </div>
    );
  }
  
export default Hero;
