import React from 'react';

function Card(props) {
  const cardClass = "card " + props.title;
  return (
      <div className={cardClass}>
        <img src={props.img} alt={props.title} />
        <h2>{props.heading}</h2>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
  );
}

export default Card;
