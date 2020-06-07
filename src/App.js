import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import WorkCase from './templates/works';
import AboutMe from './templates/aboutme';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { randomColor } from './foundation';


function App() {
  const colors = ['#000B29', '#095C11', '#D9A116', '#A11040', '#10359C', '#531C70'];
  const newColor = randomColor(colors);

  return (
    <div className="content-wrapper">
      <Header />
        <div className="anim" style={{backgroundColor: newColor}}>
          <Switch>
            <Route path="/" exact render={() => <MainPage bgcolor={newColor} />}/>
            <Route path="/work" render={() => <Work bgcolor={newColor} />} />
            <Route path="/works/:userId" component={WorkCase} />
            <Route path="/about" component={AboutMe} />
          </Switch>
        </div>
    </div>
    
  );
}

export default App;
