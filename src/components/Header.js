import React from 'react';
import User from './User';
import Controls from "./Controls";

const Header = () => (
  <header>
    <h1>Recipes Book (<User />) <Controls/></h1>
  </header>
);

export default Header;