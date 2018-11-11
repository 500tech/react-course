import React from 'react';
// components
import List from './List';
import Card from './Card';

const App = () => {
  return (
    <div className="page">
      <Card title="woohoo">
        <List />
      </Card>
    </div>
  );
};

export default App;
