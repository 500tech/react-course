import React from 'react';

const Item = () => (
  <div className="item">
    <div className="left-area">
      <div className="date">October 12, 2018</div>
      <div className="label">Learn the basics of React</div>

      <div className="actions">
        <div className="delete">delete</div>
        <div className="favorite">favorite</div>
      </div>
    </div>
    <div className="right-area">
      <div className="time">12:40</div>
    </div>
  </div>
);

export default Item;
