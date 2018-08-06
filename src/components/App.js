import React from 'react';
import Navigation from './common/Navigation';

// pages
import TimerList from './pages/TimerList/TimerList';
import Login from './pages/Login';
import Timer from './pages/Timer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

const NotFound = () => (<div className="page"><h3>page not found</h3></div>);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/timers" component={TimerList} />
          <Route exact path="/timers/:id" component={Timer} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
