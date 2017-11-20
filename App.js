import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';

import Root from 'native/root'

const App = () => (
  <Provider store={ store }>
    <Root/>
  </Provider>
);

export default App;