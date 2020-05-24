import React from 'react';
import About from '../../components/about';
import Hero from '../../components/hero';
import Follow from '../../components/follow';

function MainPage() {
  return (
    <div className="page">
      <Hero page="main"/>
      <div className="page-main">
        <About />
      </div>
      <Follow page="main"/>
    </div>
  );
}

export default MainPage;
