import React from 'react';
import About from '../../components/about';
import Hero from '../../components/hero';

function MainPage() {
  return (
    <div className="page">
      <Hero />
      <div className="page-main container">
        <About />
      </div>
    </div>
  );
}

export default MainPage;
