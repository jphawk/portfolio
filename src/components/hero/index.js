import React from 'react';

function Hero(props) {
    /*const element = [`url("./images/element1.svg")`, `url("./images/element2.svg")`, `url("./images/element3.svg")`, `url("./images/element4.svg")`, `url("./images/element5.svg")`];
    const random_class = element[Math.floor(Math.random() * element.length)];
    document.getElementsByClassName('bubble').style.backgroundImage = random_class;*/
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
