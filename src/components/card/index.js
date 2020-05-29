import React, { useState } from 'react';

function Card(props) {
  const [isHovered, setHovered] = useState(false);
  const [resetTimer, setTimer] = useState(0);

  const handleHoveredTrue = () => setHovered(true);

  const handleHoveredFalse = () => {
    clearTimeout(resetTimer);

    const timer = () => setTimeout(() => {
      setHovered(false)
    }, 500);

    setTimer(timer);
    
  };

  const layer = isHovered ? " show" : " hide";
  const cardClass = "card " + props.title;
  const description = "card-description" + layer;
  return (
    <div onMouseOver={handleHoveredTrue} onMouseLeave={handleHoveredFalse} className={cardClass}>
      <div className={description}>
        <p>{props.description}</p>
      </div>
      <div className="card-container">
        <img src={props.img} alt={props.title} />
        <h2>{props.heading}</h2>
      </div>
    </div>
  );
}

export default Card;
