import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';

function Work() {
  const cases = [
    {title: "something", heading: "something", img: "something", description: "something"},
    {title: "something1", heading: "something1", img: "something1", description: "something1"},
    {title: "something2", heading: "something2", img: "something2", description: "something"}
  ];
  return (
    <>
      <Hero page="work"/>
      <div className="page">
        <div className="page-main">
          <div className="container">
          {
            cases.map(workcase => (
              <Card title={workcase.title} heading={workcase.heading} img={workcase.img} description={workcase.description}/>
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
