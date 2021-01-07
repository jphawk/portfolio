import React from 'react';
import Card from '../card';
import { Link } from 'react-router-dom';

function Medium(props) {
  const { bgcolor, medium } = props;
  const mediumFiltered = medium.sort(function(a, b) {
    a = new Date(a.updatedAt);
    b = new Date(b.updatedAt);
    return a>b ? -1 : a<b ? 1 : 0;
  });
  return (
    <>
      <div className="medium-articles">
        <h2 style={{ color: bgcolor }}>Me on Medium</h2>
        <div className="container">
          {
            mediumFiltered.slice(0,3).map((article, key) => (
              <a className="card-link" href={article.mediumLink} title={article.name} key={article.name} target="_blank">
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
      <Link to={`/medium`} style={{color:bgcolor}} title="Check out more" className="medium-block-checkmore"><h3>Check out more!</h3></Link>
    </>
  );
};

export default Medium;
