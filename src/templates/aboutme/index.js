import React, { useState } from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';
import Divider from '../../components/divider';
import Card from '../../components/card';
import { randomColor } from '../../foundation';

function AboutMe(props) {
  const { bgcolor, medium, feedback, about } = props;
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
                      <h3>Check my CV on <a style={{ color: bgcolor }} href="https://www.linkedin.com/in/elena-kazakova-uxdev/" title="My CV">LinkedIn</a></h3>
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
          <div className="medium-articles">
            <h2 style={{ color: bgcolor }}>Me on Medium</h2>
            <div className="container">
              {
                medium.map((article, key) => (
                  <a className="card-link" href={article.mediumLink} title={article.name} key={article.name}>
                    <Card
                      key={key}
                      divName={article.slug}
                      bgcolor={bgcolor} 
                      heading={article.name} 
                      img={article.image.url} 
                      description={article.description} 
                    />
                  </a>
                )
              )}
            </div>
          </div>
          <Feedback feedback={feedback} bgcolor={bgcolor} />
        </div>
      </div>
      <Follow />
    </>
  );
}

export default AboutMe;
