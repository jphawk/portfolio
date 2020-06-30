import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import { useParams } from 'react-router-dom';

function WorkCase(props) {
  const { slug } = useParams();
  const ReactMarkdown = require('react-markdown/with-html');
  return (
    <div className="page">
      {props.workcases.filter(workcase => workcase.slug === slug).map(filteredCase => (
      <>
        <div className="page-workcase-hero">
          {filteredCase.mediumLink && 
            <a 
              href={filteredCase.mediumLink} 
              title="Read about this in Medium"
              className="medium-link">
                <div className="medium-link-container">
                  <p>Read about this
                  <span>on Medium</span></p>
                </div>
            </a>}
            <div className="page-workcase-arrow"></div>
            <Hero page="workcase" title={filteredCase.workcaseTitle} />
        </div>
        <div className="page-workcase">
          <div className="page-workcase-container">
            <ReactMarkdown source={filteredCase.workcaseContentHtml && filteredCase.workcaseContentHtml.toString()} escapeHtml={false} />
          </div>
        </div>
        <Follow />
      </>
       ))}
    </div>
  );
}

export default WorkCase;
