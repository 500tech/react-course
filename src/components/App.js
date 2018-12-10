import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// common layout
import Navigation from './common/Navigation';

// pages
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Task from './pages/Task';

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route exact path="*" component={() => 'page not found!'} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
