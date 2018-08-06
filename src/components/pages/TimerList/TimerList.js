import React from 'react';

import Header from './Header';
import List from './List';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    items: []
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addItem = (label) => {
    const item = {
      id: this.uuid(),
      label: label || 'untitled',
      date: moment().format('MMMM DD, YYYY'),
      isFavorite: false,
      isRunning: true
    };

    this.setState({
      items: this.state.items.concat(item)
    });
  };

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <div>
        <Header addItem={this.addItem}/>
        <List
          removeItem={this.removeItem}
          items={this.state.items}
        />
      </div>
    );
  }
}
