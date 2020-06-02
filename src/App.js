import React from 'react';
import MainPage from './templates/main';
import Work from './templates/work';
import WorkCase from './templates/works';
import AboutMe from './templates/aboutme';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { motion } from "framer-motion";
import { useElapsedTime } from "use-elapsed-time";

function App() {
  const isPlaying = true;
  const duration = 120;
  const options = { duration };
  const { elapsedTime } = useElapsedTime(isPlaying, options);

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
        >
          <Switch>
            <Route path="/" exact render={() => <MainPage animation={elapsedTime} />}/>
            <Route path="/work" render={() => <Work animation={elapsedTime}/>} />
            <Route path="/works/:userId" component={WorkCase} />
            <Route path="/about" component={AboutMe} />
          </Switch>
        </motion.main>
    </div>
    
  );
}

export default App;
