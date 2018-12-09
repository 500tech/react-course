import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert(1)}>click here</Button>
    </div>
  );
};

export default App;
