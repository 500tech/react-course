import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = (props) => {
  return React.createElement('h1', null, props.text)
};

const App = () => {
  return React.createElement('div', null,
    React.createElement(Header, { text: 'Hi' }),
    React.createElement(Header, { text: 'Bye' }),
    React.createElement('h2', null, 'World')
  )
};

window.App = App;


render(
  React.createElement(App),
  document.getElementById('root')
);
