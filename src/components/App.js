import React from 'react';
import Navigation from './common/Navigation';

// pages
import TimerList from './pages/TimerList/TimerList';
import Login from './pages/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/list" component={TimerList} />
        <Route exact path="*" component={() => (<h3>not found</h3>)} />
      </Switch>
    </div>
  </Router>
);

export default App;
