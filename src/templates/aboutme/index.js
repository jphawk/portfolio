import React, { useState } from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';
import Divider from '../../components/divider';
import Medium from '../../components/mediumblock';
import { randomColor } from '../../foundation';

function AboutMe(props) {
  const { bgcolor, feedback, about, medium } = props;
  const newRandom = [about[0].fact1, about[0].fact2, about[0].fact3, about[0].fact4, about[0].fact5];
  const [random, randomFact] = useState(randomColor(newRandom));
  const ReactMarkdown = require('react-markdown/with-html');
  return (
    <>
      <Hero page="about"/>
      <div className="page">
        <div className="page-about">
          <div className="page-about-container">
            {
              about.map((about, key) => {
                return(
                  <React.Fragment>
                    <div className="page-about-box">
                      <ReactMarkdown source={about.aboutText} key={key} escapeHtml={false} />
                    </div>
                    <Divider bgcolor={bgcolor} />
                    <div className="about-random">
                      <h2 style={{ color: bgcolor }}>A random fact about me</h2>
                      <p>{random}</p>
                      <button style={{ backgroundColor: bgcolor, borderColor: bgcolor }} onClick={() => randomFact(randomColor(newRandom))}>Get another one</button>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>

          <Divider bgcolor={bgcolor} />

          <Medium medium={medium} bgcolor={bgcolor} />
          <Divider bgcolor={bgcolor} />

          <Feedback feedback={feedback} bgcolor={bgcolor} />
        </div>
      </div>
      <Follow />
    </>
  );
}

export default AboutMe;
