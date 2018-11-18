import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Timers from './Timers';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/timers/:id?"
        component={Timers} />
    </Switch>
  </Router>
);

export default App;
