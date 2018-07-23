import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Timers from './Timers';
import About from './About';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/timers" component={Timers} />
        <Route exact path="/about" component={About} />

        <Route path="*" component={() => (
          <h3>page not found</h3>
        )} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
