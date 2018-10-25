import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Dashboard from './pages/Dashboard';
import About from './pages/About';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/:id?" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => (<h3>not found page</h3>)} />
        </Switch>
      </Router>
    );
  }
}
