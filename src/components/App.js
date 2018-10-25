import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Counter from './Counter';
import Demo from './Demo';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Demo />
          <Counter />
        </div>
      </Provider>
    );
  }
}
