import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';
import { Link } from 'react-router-dom';

const OnMedium = (props) => {
  const { bgcolor, medium } = props;
  const mediumFiltered = medium.sort(function(a, b) {
    a = new Date(a.updatedAt);
    b = new Date(b.updatedAt);
    return a>b ? -1 : a<b ? 1 : 0;
});
  return (
    <>
      <Hero page="medium"/>
      <div className="page">
        <div className="page-medium">
          <div className="page-medium-container">
            {
              mediumFiltered.map((article, key) => (
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
      </div>
      <Follow />
    </>
  );
}

export default OnMedium;
