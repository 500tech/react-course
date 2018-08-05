import React from 'react';

import Navigation from './Navigation';
import Header from './Header';
import List from './List';

const items = [
  { id: 0, label: 'first item', date: 'october 23, 2018', isFavorite: false },
  { id: 1, label: 'first item', date: 'october 23, 2018', isFavorite: false }
];

const App = () => (
  <div className="app">
    <Navigation />
    <Header />
    <List items={items} />
  </div>
);

export default App;
