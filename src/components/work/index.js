import React from 'react';
import Card from '../../components/card';
import { Link } from 'react-router-dom';

function Work(props) {
  const { bgcolor, workcases } = props;
  return (
    <>
      <h2 style={{color:bgcolor}}>My Recent Projects</h2>
      <div className="work-block">
        {
          workcases.slice(0,3).map(workcase => (
          <Link to={`/works/${workcase.slug}`} title={workcase.workcaseTitle} key={workcase.workcaseTitle}>
            <Card
              key={workcase.slug}
              divName={workcase.slug} 
              bgcolor={bgcolor} 
              title={workcase.workcaseTitle} 
              heading={workcase.workcaseTitle} 
              img={workcase.image.url} 
              description={workcase.workcaseDescription} 
            />
          </Link>
          )
        )}
      </div>
      <Link to={`/work`} style={{color:bgcolor}} title="Check out more" className="work-block-checkmore"><h3>Check out more!</h3></Link>
    </>
  );
};

export default Work;
