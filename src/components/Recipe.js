import React from 'react';

const Recipe = ({ name}) => (
  <li onClick={ () => console.log('Hey') }>{ name }</li>
);

export default Recipe;