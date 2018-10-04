import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Timers from './pages/Timers';
import Details from './pages/Details';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/timers" component={Timers} />
          <Route exact path="/timers/:id" component={Details} />
          <Route exact path="*" component={() => (<h3>404 | page not found</h3>)} />
        </Switch>
      </Router>
    );
  }
}
