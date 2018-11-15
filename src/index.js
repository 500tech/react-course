import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const items = [
  { id: 0, label: 'eggs' },
  { id: 1, label: 'bread' },
  { id: 2, label: 'milk' }
];

const App = () => (
  <div className="list">
    {
      items.map(item => (
        <div
          className="item"
          key={item.id}>
          {item.label}
        </div>
      ))
    }
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

