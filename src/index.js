import React from 'react';
import { render } from 'react-dom';
import './index.css';

render(
  React.createElement('div', null, 'Hello world!'),
  document.getElementById('root')
);
