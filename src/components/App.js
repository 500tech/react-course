import React from 'react';
import List from './List';
import Button from './Button';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'blue'
};

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Button label="click here" />
      <List />
    </div>
  </ThemeProvider>
);

export default App;
