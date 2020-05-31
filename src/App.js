import React, { useState, useEffect } from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import WorkCase from './templates/works';
import AboutMe from './templates/aboutme';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { motion } from "framer-motion";

function App() {
  const [isStarted, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <div className="content-wrapper">
      <Header />
        <motion.main
          animate={{
            backgroundColor: ["#000B29", "#095C11", "#D9A116", "#A11040", "#10359C", "#000B29"]
          }}
          transition={{
            duration: 120,
            loop: Infinity
          }}
          layoutId="bg"
        >
          <Switch>
            <Route path="/" exact render={() => <MainPage started={isStarted} />}/>
            <Route path="/work" render={() => <Work started={isStarted} />} />
            <Route path="/works/:userId" component={WorkCase} />
            <Route path="/about" component={AboutMe} />
          </Switch>
        </motion.main>
    </div>
    
  );
}

export default App;
