import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="plx">
      <div className="plx-internal"></div>
    </div>
    <App />
  </BrowserRouter>, 
  document.getElementById('portfolio')
);
