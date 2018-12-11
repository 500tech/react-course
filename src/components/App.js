import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

// common layout
import Navigation from './common/Navigation';

// pages
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Counter from './pages/Counter';
import Task from './pages/Task';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/" component={Login} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/tasks/:id" component={Task} />
          <Route exact path="*" component={() => 'page not found!'} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
