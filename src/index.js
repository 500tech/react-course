import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// components
import Navigation from './components/Navigation';
import Header from './components/Header';
import List from './components/List';

const App = () => (
  <div className="app">
    <Navigation />
    <Header />
    <List />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
