import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import { useParams } from 'react-router-dom';

function WorkCase(props) {
  const { slug } = useParams();
  return (
    <div className="page">
      {props.workcases.filter(workcase => workcase.slug === slug).map(filteredCase => (
      <>
        <Hero page="workcase" title={filteredCase.workcaseTitle} />
        <div className="page-workcase">
          <div className="page-workcase-container">
            {filteredCase.workcaseContentHtml}
          </div>
        </div>
        <Follow />
      </>
       ))}
    </div>
  );
}

export default WorkCase;
