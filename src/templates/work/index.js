import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';
import { Link } from 'react-router-dom';
import { cases } from '../../content';

function Work(props) {

  return (
    <>
      <Hero page="work"/>
      <div className="page">
        <div className="page-work">
          <div className="page-work-container">
          {
            cases.map(workcase => (
              <Link to={"works/" + workcase.title} title={workcase.title}>
                <Card key={workcase.title} title={workcase.title} heading={workcase.heading} img={workcase.img} description={workcase.description} {...props}/>
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
