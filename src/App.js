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

const GRAPHCMS_API = 'https://api-eu-central-1.graphcms.com/v2/ckbg8zpxy3l2w01xy58y004vm/master';

function App() {
  const colors = ['#000B29', '#095C11', '#D9A116', '#A11040', '#10359C', '#531C70'];
  const newColor = randomColor(colors);

  const [workcases, setWorkcases] = useState(null);

  useEffect(() => {
    const fetchWorkcases = async () => {
      const { workcases } = await request(
        GRAPHCMS_API,
        cases
      );

      setWorkcases(workcases);
    };

    fetchWorkcases();
  }, []);

  return (
      <div className="content-wrapper">
        <Header />
          <div className="anim" style={{backgroundColor: newColor}}>
            {!workcases ? ('Loading') :
              <Switch>
                <Route path="/" exact render={() => <MainPage workcases={workcases} bgcolor={newColor} />}/>
                <Route path="/work" render={() => <Work workcases={workcases} bgcolor={newColor} />} />
                <Route path="/works/:slug" render={() => <WorkCase workcases={workcases} />} />
                <Route path="/about" component={AboutMe} />
              </Switch>
            }
          </div>
      </div>
  );
}

export default App;
