import React from 'react';
import Counter from './Counter';

const Header = () => (
  <header>
    <h1>Recipes Book (<Counter total={ 10 } />)</h1>
  </header>
);

export default Header;