import React from 'react';
import Slider from 'infinite-react-carousel';

function Feedback(props) {

  const { bgcolor, feedback } = props;
  const bg = () => {
    switch(bgcolor) {
      case "#10359C":
        return 'lightblue';
      case "#095C11":
        return 'green';
      case "#000B29":
        return 'blue';
      case "#A11040":
        return 'red';
      case "#D9A116":
        return 'yellow';
      default:
        return 'purple';
    }
  }
  const dots = "carousel-dots " + bg();
  return (
    <div className="feedback-container container">
      <h2 style={{color:bgcolor}}>Professionals on working with me</h2>
      <Slider dots className={dots} >
        {
          feedback.map(myfeedback => (
            <>
              <p className="feedback-container-rec">{myfeedback.recommendation}</p>
              <p className="feedback-container-info"><a className="feedback-container-author" href={myfeedback.linkedin} title={myfeedback.author} style={{color:bgcolor}}><span>{myfeedback.author}</span></a>, {myfeedback.title} from {myfeedback.company}</p>
            </>
          )
        )
        }
      </Slider>
    </div>
  );
}

export default Feedback;