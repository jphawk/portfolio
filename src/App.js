import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Follow from './components/follow';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/work" component={Work} />
          <Route path="/#about" />
          <Route path="/#follow" />
        </Switch>
      </main>
      <Follow />
    </div>
    
  );
}

export default App;
