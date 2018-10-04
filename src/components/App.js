import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

// components
import Timers from './pages/Timers';
import Details from './pages/Details';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/timers" component={Timers} />
            <Route exact path="/timers/:id" component={Details} />
            <Route exact path="*" component={() => (<h3>404 | page not found</h3>)} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
