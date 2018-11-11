import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const list = ['apples', 'eggs', 'milk'];
const App = ({ children }) => (<div>{children}</div>);

const List = ({ children }) => (<ul>{children}</ul>);

const ListItem = ({ label }) => (<li>{label}</li>);

ReactDOM.render(
  <App>
    <List>
      {
        list.map(label => (
          <ListItem
            key={label}
            label={label} />
        ))
      }
    </List>
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
