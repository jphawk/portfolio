import React from 'react';
import Hero from '../../components/hero';
import Follow from '../../components/follow';
import Gallery from 'react-grid-gallery';
import { useParams } from 'react-router-dom';

function WorkCase(props) {
  const { slug } = useParams();
  const imagesQuery = props.misc.map((entity) => (
      {
        src: entity.image.url,
        thumbnail:entity.thumbnail.url,
        caption: entity.name,
        thumbnailWidth: entity.width,
        thumbnailHeight: entity.height
      }
  ));
  const ReactMarkdown = require('react-markdown/with-html');
  return (
    <div className="page">
      {props.workcases.filter(workcase => workcase.slug === slug).map((filteredCase, key) => (
      <div className={filteredCase.slug} key={key}>
        <div className="page-workcase-hero">
          {filteredCase.mediumLink && 
            <React.Fragment>
              <a 
                href={filteredCase.mediumLink} 
                title="Read about this in Medium"
                className="medium-link">
                  <div className="medium-link-container">
                    <p>Read about this
                    <span>on Medium</span></p>
                  </div>
              </a>
              <div className="page-workcase-arrow"></div>
            </React.Fragment>}
            <Hero page="workcase" title={filteredCase.workcaseTitle} />
        </div>
        <div className="page-workcase">
          <div className="page-workcase-container">
            <ReactMarkdown source={filteredCase.workcaseContentHtml && filteredCase.workcaseContentHtml.toString()} escapeHtml={false} />
            {filteredCase.gallery && 
              <div className="gallery-container">
                <Gallery images={imagesQuery} enableImageSelection={false} />
              </div>
            }
          </div>
        </div>
        <Follow />
      </div>
       ))}
    </div>
  );
}

export default WorkCase;
