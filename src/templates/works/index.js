import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import { cases } from '../../content';
import { workSlug } from '../../foundation';

function WorkCase() {
  console.log(workSlug());
  return (
    <div className="page">
      {cases.filter(workcase => workcase.title === workSlug()).map(filteredCase => (
        <>
          <Hero page="workcase" title={filteredCase.heading} />
          <div className="page-workcase">
            <div className="page-workcase-container">
              <p>{filteredCase.description}</p>
            </div>
          </div>
          <Follow />
        </>
      ))}
    </div>
  );
}

export default WorkCase;
