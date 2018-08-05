import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement('h3', null, 'hello React & Redux course'),
  document.getElementById('root')
);
registerServiceWorker();
