import React from 'react';

function Card(props) {

  const cardClass = "card card-" + props.title;

  return (
    <div className={cardClass}>
      <div className="card-description" style={{ backgroundColor: props.bgcolor }}>
        <p>{props.description}</p>
      </div>
      <div className="card-container">
        <img src={props.img} alt={props.title} />
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
}

export default Card;
