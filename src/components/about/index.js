import React from 'react';
import portrait from '../../images/myself.jpg';

function About() {
    return (
      <div id="about" className="about">
        <div className="about-pic">
          <img src={portrait} alt="Elena Kazakova, UX Developer" />
        </div>
        <div>
          <p>
              Hello, I am Elena and I am working as a UX developer. I have a background in user-centred design, which I studied in Aalto University (MSc Information Networks), and I am keen not only on interface design, but also on its testing and implementation. Likewise, I work a lot with design systems and have experience in their planning and development. As a person with skills in both design and coding, I especially enjoy bringing together designers and developers for co-creation and eliminating all obstacles for the team to achieve great results. I also like organising UX-related events and recently I worked on bringing UXHel to our premises and was a speaker on the event. 
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  