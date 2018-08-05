import React from 'react';
import Item from './Item';

const List = (props) => (
  <div className="list">
    {props.items.map(item => <Item {...item} key={item.id} />)}
  </div>
);

export default List;
