import React from 'react';
import Card from '../../components/card';
import { Link } from 'react-router-dom';
import { cases } from '../../content';

function Work() {
  return (
      <div className="work-block">
        {
          cases.slice(0,3).map(workcase => (
            <Link to={"works/" + workcase.title} title={workcase.title}>
              <Card title={workcase.title} heading={workcase.heading} img={workcase.img} description={workcase.description}/>
            </Link>
          )
        )}
      </div>
  );
};

export default Work;
