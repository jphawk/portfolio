import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <main>
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/work" component={Work} />
        </Switch>
      </main>
  );
}

export default App;
