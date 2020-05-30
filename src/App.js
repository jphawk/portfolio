import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import WorkCase from './templates/works';
import AboutMe from './templates/aboutme';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/work" component={Work} />
          <Route path="/works/:userId" component={WorkCase} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </main>
    </div>
    
  );
}

export default App;
