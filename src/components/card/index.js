import React from 'react';

function Card(props) {
  const cardClass = "card " + props.title;
  return (
    <div className={cardClass}>
      <div className="card-description">
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
