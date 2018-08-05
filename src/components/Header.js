import React from 'react';

const Header = (props) => (
  <div className="header">
    <input
      className="input"
      placeholder="timer description"
    />
    <div className="button" onClick={props.addItem}>add new</div>
  </div>
);

export default Header;
