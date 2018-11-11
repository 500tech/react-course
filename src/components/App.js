import React from 'react';

import List from './List';
import Card from './Card';

class App extends React.Component {
  state = {
    data: [
      { id: 0, label: 'aaa' },
      { id: 1, label: 'bbb' },
      { id: 2, label: 'ccc' }
    ],
    inputValue: ''
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleClick = () => this.setState({
    inputValue: '',
    data: this.state.data.concat({
      id: this.uuid(),
      label: this.state.inputValue
    })
  });

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  handleRemoveItem = id => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    });
  };

  render() {
    const { data, inputValue } = this.state;

    return (
      <div className="page">
        <Card title="woohoo">
          <input
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <div onClick={this.handleClick} className="button">add</div>
          <List data={data} onRemove={this.handleRemoveItem} />
        </Card>
      </div>
    );
  }
}

export default App;
