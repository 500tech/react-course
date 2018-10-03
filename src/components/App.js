import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
const Dashboard = () => (<h3>dashboard</h3>);
const Home = () => (<h3>home</h3>);
const NotFound = () => (<h3>404</h3>);

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
