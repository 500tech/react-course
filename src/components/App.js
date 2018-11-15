import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// pages
import List from './pages/List';
import Item from './pages/Item';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/list" component={List} />
        <Route exact path="/list/:id" component={Item} />
        <Route path="*" component={() => <h3>Page not found!</h3>} />
      </Switch>
    </Router>
  );
};

export default App;
