import React from 'react';

const Card = ({ children, width, height }) => (
  <div
    className="card"
    style={{
      width,
      height
    }}
  >
    {children}
  </div>
);

export default Card;
