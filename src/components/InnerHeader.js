import React from 'react';

const InnerHeader = () => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
  </header>
);

InnerHeader.propTypes = {
};

export default InnerHeader;