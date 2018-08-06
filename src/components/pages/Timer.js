import React from 'react';
import Card from '../common/Card';

const Timer = (props) => (
  <div className="page">
    <Card>
      {props.match.params.id}
    </Card>
  </div>
);

export default Timer;
