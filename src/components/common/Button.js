import React from 'react';

const Button = (props) => (
  <div
    className="button"
    onClick={props.onClick}>
    {props.label}
  </div>
);

export default Button;
