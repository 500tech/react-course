import React from 'react';

// components
import Card from '../common/Card';

const Welcome = (props) => {
  return (
    <Card>
      <div onClick={() => props.history.push('/')}>welcome wobi!</div>
    </Card>
  );
};

export default Welcome;
