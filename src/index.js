import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement('div', {}, [
    'hello',
    React.createElement('h3', {}, 'content')
  ]),
  document.getElementById('root')
);
