import React from 'react';
import About from '../../components/about';
import Hero from '../../components/hero';
import Work from '../../components/work';
import Follow from '../../components/follow';

function MainPage(props) {
  return (
    <div className="page">
      <Hero page="main"/>
      <div className="page-main">
        <div className="page-main-container">
          <Work bgcolor={props.bgcolor}/>
          <About />
        </div>
      </div>
      <Follow page="main"/>
    </div>
  );
}

export default MainPage;
