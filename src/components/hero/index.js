import React from 'react';

function Hero(props) {
    return (
      <div className="hero">
        <div className="bottom-particles">
          {[...Array(50)].map((item, key) =>
            <div className="bubble" key={key}></div>
          )}
        </div>
        { props.page === "main" && 
          <div className="hero-text">
            <div className="background">
              <h1>Hello, I'm Elena</h1>
              <h2>a UX Developer based in Helsinki</h2>
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
        { props.page === "medium" && 
          <div className="hero-text nomain">
            <div className="background">
              <h1>Me on Medium</h1>
            </div>
          </div>
        }
        { props.page === "workcase" && 
          <div className="hero-text nomain">
            <div className="background">
              <h1>{props.title}</h1>
            </div>
          </div>
        }
      </div>
    );
  }
  
export default Hero;
