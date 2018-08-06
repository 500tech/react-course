import React from 'react';

const Input = (props) => (
  <input
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    type={props.type || 'text'}
    className="input"
  />
);

export default Input;
