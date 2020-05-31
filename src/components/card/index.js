import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

function Card(props) {
  const cardClass = "card card-" + props.title;
  const controls = useAnimation();

  console.log(props.started);
  useEffect(() => {
    props.started && 
    controls.start({
      backgroundColor: ["#000B29", "#095C11", "#D9A116", "#A11040", "#10359C", "#000B29"],
      transition: {
        duration: 120,
        loop: Infinity
      }
    }
    )
  });

  return (
    <div className={cardClass}>
      <motion.div className="card-description" 
        animate={controls}
      >
        <p>{props.description}</p>
      </motion.div>
      <div className="card-container">
        <img src={props.img} alt={props.title} />
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
}

export default Card;
