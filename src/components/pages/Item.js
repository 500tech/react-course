import React from 'react';
import Button from '../common/Button';

const Item = (props) => {
  // console.log(props);

  return (
    <div onClick={() => props.history.push('/list')}>
      item page - {props.match.params.id}
      <Button />
    </div>
  );
};

export default Item;
