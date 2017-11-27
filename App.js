import React from 'react';
import { Provider } from 'react-redux';

import Root from 'native/root';

import store from './src/store';

const App = () => (
  <Provider store={ store }>
    <Root />
  </Provider>
);

export default App;