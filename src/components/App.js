import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/Home" component={Home} />
      <Route path="*" component={() => (<h3>Not found!</h3>)} />
    </Switch>
  </Router>
);

export default App;
