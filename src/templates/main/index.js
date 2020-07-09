import React from 'react';
import Hero from '../../components/hero';
import Work from '../../components/work';
import Follow from '../../components/follow';
import Feedback from '../../components/feedback';
import Divider from '../../components/divider';

function MainPage(props) {
  const { bgcolor, workcases, feedback } = props;

  return (
    <div className="page">
      <Hero page="main"/>
      <div className="page-main">
        <div className="page-main-container">
          <Work workcases={workcases} bgcolor={bgcolor}/>
        </div>
        <Divider bgcolor={bgcolor} />
        <Feedback feedback={feedback} bgcolor={bgcolor} />
      </div>
      <Follow page="main"/>
    </div>
  );
}

export default MainPage;
