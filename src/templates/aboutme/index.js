import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';
import Divider from '../../components/divider';
import Card from '../../components/card';

function AboutMe(props) {
  const { bgcolor, medium, feedback } = props;
  return (
    <>
      <Hero page="about"/>
      <div className="page">
        <div className="page-about">
          <div className="page-about-container">
            <p>
              Hello, I am Elena and I am working as a UX developer. I have a background in user-centred design, which I studied in Aalto University (MSc Information Networks), and I am keen not only on interface design, but also on its testing and implementation. Likewise, I work a lot with design systems and have experience in their planning and development. As a person with skills in both design and coding, I especially enjoy bringing together designers and developers for co-creation and eliminating all obstacles for the team to achieve great results. I also like organising UX-related events and recently I worked on bringing UXHel to our premises and was a speaker on the event. 
            </p>
          </div>
          <Divider bgcolor={bgcolor} />
          <div className="medium-articles">
            <h2 style={{ color: bgcolor }}>Me on Medium</h2>
            <div className="container">
              {
                medium.map(article => (
                  <a className="card-link" href={article.mediumLink} title={article.name} key={article.name}>
                    <Card
                      key={article.name}
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
