import React from 'react';
import Hero from '../../components/hero';
import Card from '../../components/card';
import Follow from '../../components/follow';

function Work() {
  const cases = [
    {title: "something", heading: "something", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something1", heading: "something1", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something2", heading: "something2", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something", heading: "something", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something1", heading: "something1", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something", heading: "something", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something1", heading: "something1", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something2", heading: "something2", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something", heading: "something", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something1", heading: "something1", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "something2", heading: "something2", img: "https://via.placeholder.com/300x250", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
  ];
  return (
    <>
      <Hero page="work"/>
      <div className="page">
        <div className="page-work">
          <div className="page-work-container">
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
