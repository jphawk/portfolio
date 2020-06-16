import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';
import { Link } from 'react-router-dom';

const Work = (props) => {
  const { bgcolor, workcases } = props;

  return (
    <>
      <Hero page="work"/>
      <div className="page">
        <div className="page-work">
          <div className="page-work-container">
          {
            workcases.map(workcase => (
              <Link to={`/works/${workcase.slug}`} title={workcase.workcaseTitle} key={workcase.workcaseTitle}>
                <Card key={workcase.workcaseTitle} bgcolor={bgcolor} title={workcase.workcaseTitle} heading={workcase.workcaseTitle} img={workcase.image.url} description={workcase.workcaseDescription} />
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
