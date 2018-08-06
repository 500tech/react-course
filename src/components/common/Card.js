import React from 'react';

const Card = ({ children, styles }) => (
  <div
    className="card"
    style={styles}
  >
    {children}
  </div>
);

export default Card;
