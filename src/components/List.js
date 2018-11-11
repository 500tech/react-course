import React from 'react';

const List = ({ data }) => {
  return (
    <div className="list">
      {
        data.map(item => (
          <div key={item.id} className="row">
            {item.label}
          </div>
        ))
      }
    </div>
  );
};

export default List;
