import React from 'react';
// components
import List from './List';
import Card from './Card';

const data = [
  { id: 0, label: 'aaa' },
  { id: 1, label: 'bbb' },
  { id: 2, label: 'ccc' }
];

const App = () => {
  return (
    <div className="page">
      <Card title="woohoo">
        <List data={data}/>
      </Card>
    </div>
  );
};

export default App;
