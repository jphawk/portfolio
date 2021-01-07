import React, {useState, useEffect} from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import WorkCase from './templates/works';
import AboutMe from './templates/aboutme';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { randomColor } from './foundation';
import { cases } from './queries';
import { request } from 'graphql-request';
import OnMedium from './templates/medium';

const GRAPHCMS_API = 'https://api-eu-central-1.graphcms.com/v2/ckbg8zpxy3l2w01xy58y004vm/master';

function App() {
  const colors = ['#000B29', '#095C11', '#D9A116', '#A11040', '#10359C', '#531C70'];
  const newColor = randomColor(colors);

  const [workcases, setWorkcases] = useState(null);
  const [feedbacks, setFeedback] = useState(null);
  const [galleryMiscs, setMisc] = useState(null);
  const [mediumArticles, setMedium] = useState(null);
  const [abouts, setAbout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { workcases, feedbacks, galleryMiscs, mediumArticles, abouts } = await request(
        GRAPHCMS_API,
        cases
      );

      setWorkcases(workcases);
      setFeedback(feedbacks);
      setMisc(galleryMiscs);
      setMedium(mediumArticles);
      setAbout(abouts);
    };

    fetchData();
  }, []);

  return (
      <div className="content-wrapper">
        <Header />
          {!(workcases && feedbacks && galleryMiscs && mediumArticles && abouts)? ('') :
            <div className="anim" style={{backgroundColor: newColor}}>
              <Switch>
                <Route path="/" exact render={() => <MainPage workcases={workcases} feedback={feedbacks} bgcolor={newColor} />}/>
                <Route path="/work" render={() => <Work workcases={workcases} bgcolor={newColor} />} />
                <Route path="/works/:slug" render={() => <WorkCase workcases={workcases} bgcolor={newColor} misc={galleryMiscs} />} />
                <Route path="/about" render={() => <AboutMe about={abouts} feedback={feedbacks} bgcolor={newColor} medium={mediumArticles} />} />
                <Route path="/medium" render={() => <OnMedium medium={mediumArticles} bgcolor={newColor} />} />
              </Switch>
            </div>
          }
      </div>
  );
}

export default App;
