import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// common layout
import Navigation from './common/Navigation';

// pages
import Welcome from './pages/Welcome';
import Todo from './pages/Todo';

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/users/:id?" component={Welcome} />
        <Route exact path="*" component={() => 'page not found!'} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
