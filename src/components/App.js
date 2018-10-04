import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TasksList from './TasksList';
import Login from './Login';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/list" component={TasksList} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
