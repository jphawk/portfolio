import React from 'react';
import Hero from '../../components/hero';
import Work from '../../components/work';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';

function MainPage(props) {
  return (
    <div className="page">
      <Hero page="main"/>
      <div className="page-main">
        <div className="page-main-container">
          <Work workcases={props.workcases} bgcolor={props.bgcolor}/>
        </div>
        <Feedback feedback={props.feedback} bgcolor={props.bgcolor} />
      </div>
      <Follow page="main"/>
    </div>
  );
}

export default MainPage;
