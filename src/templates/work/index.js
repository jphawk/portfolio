import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';
import { Link } from 'react-router-dom';

const Work = (props) => {
  const { bgcolor, workcases } = props;
  const workcaseFiltered = workcases.sort(function(a, b) {
    a = new Date(a.updatedAt);
    b = new Date(b.updatedAt);
    return a>b ? -1 : a<b ? 1 : 0;
});
  return (
    <>
      <Hero page="work"/>
      <div className="page">
        <div className="page-work">
          <div className="page-work-container">
          {
            workcaseFiltered.map((workcase, i, arr) => (
              <Link className="card-link" to={`/works/${workcase.slug}`} title={workcase.workcaseTitle} key={workcase.workcaseTitle}>
                { i !== (arr.length-1) ?
                  <Card
                    key={workcase.slug}
                    divName={workcase.slug} 
                    bgcolor={bgcolor} 
                    title={workcase.workcaseTitle} 
                    heading={workcase.workcaseTitle} 
                    img={workcase.image.url} 
                    description={workcase.workcaseDescription} 
                  />
                :
                <div className="card card-last" style={{backgroundColor: bgcolor}}>
                  <h2 className="card-last-container">{workcase.workcaseTitle}</h2>
                  <div className="bottom-particles">
                    {[...Array(15)].map((i, key) =>
                      <div className="bubble" key={key}></div>
                    )}
                  </div>
                </div>
                }
              </Link>
            )
          )}
          </div>
        </div>
      </div>
      <Follow />
    </>
  );
}

export default Work;
