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
        <Hero page="workcase" title={filteredCase.workcaseTitle} />
        <div className="page-workcase">
          {filteredCase.mediumLink && <a style={{color: props.bgcolor}} href={filteredCase.mediumLink} title="Read about this in Medium">Read about this in Medium</a>}
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
