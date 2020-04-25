import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import About from './templates/about';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Follow from './components/follow';

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </Switch>
        <Follow />
      </main>
    </div>
    
  );
}

export default App;
