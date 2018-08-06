import React from 'react';

const Item = (props) => (
  <li className="completed">
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={props.isChecked}
        onChange={() => props.toggleChecked(props.id)}
      />
      <label>{props.label}</label>
    </div>
  </li>
);

export default Item;
