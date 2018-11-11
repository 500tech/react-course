import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="header">{props.title}</div>

      <div className="content">
        {props.children}
      </div>

      <div className="footer">footer buttons</div>
    </div>
  );
};

export default Card;
