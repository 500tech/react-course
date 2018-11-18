import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Timers from './Timers';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <div>hello</div>
        <Route
          exact
          path="/timers/:id?"
          component={Timers} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
