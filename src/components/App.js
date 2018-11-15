import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/store';

// pages
import List from './pages/List';
import Item from './pages/Item';


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/list" component={List} />
        <Route exact path="/list/:id" component={Item} />
        <Route path="*" component={() => <h3>Page not found!</h3>} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
