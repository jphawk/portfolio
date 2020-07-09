import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';
import Divider from '../../components/divider';
import Card from '../../components/card';

function AboutMe(props) {
  const { bgcolor, medium, feedback, about } = props;
  const ReactMarkdown = require('react-markdown/with-html');
  return (
    <>
      <Hero page="about"/>
      <div className="page">
        <div className="page-about">
          <div className="page-about-container">
            {
              about.map((about, key) => (
                <ReactMarkdown source={about.aboutText} key={key} escapeHtml={false} />
              ))
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
          <Divider bgcolor={bgcolor} />
          <Feedback feedback={feedback} bgcolor={bgcolor} />
        </div>
      </div>
      <Follow />
    </>
  );
}

export default AboutMe;
