import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

// pages
import Login from './pages/Login'
import Chat from './pages/Chat'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
