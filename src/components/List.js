import React from "react";
import ListItem from './ListItem';

const data = [
  { id: 0, label: 'eggs' },
  { id: 1, label: 'bread' }
];

const List = () => (
  <ul>
    {data.map(listItem =>
      <ListItem
        key={listItem.id}
        {...listItem}
      />)}
  </ul>
);

export default List;
