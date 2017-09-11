import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Config from './Config.jsx';

export default () => (
  <Router>
    <div>
      {Config.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </div>
  </Router>
);;

