import React from 'react';
import Spinner from './Spinner';

const Item = ({ date, label, removeItem, id }) => (
  <div className="item">
    <div className="left-area">
      <div className="date">{date}</div>
      <div className="label">{label}</div>

      <div className="actions">
        <div className="delete" onClick={() => removeItem(id)}>delete</div>
        <div className="favorite">favorite</div>
      </div>
    </div>
    <div className="right-area">
      <div className="time">
        <Spinner />
        12:40
      </div>
    </div>
  </div>
);

export default Item;
