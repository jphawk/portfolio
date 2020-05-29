import React from 'react';
import Card from '../../components/card';

function Work() {
  const cases = [
    {title: "something", heading: "something", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something1", heading: "something1", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something2", heading: "something2", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
  ];
  return (
      <div className="work-block">
        {
          cases.map(workcase => (
            <Card title={workcase.title} heading={workcase.heading} img={workcase.img} description={workcase.description}/>
          )
        )}
      </div>
  );
};

export default Work;
