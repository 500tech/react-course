import React from 'react';
import styled from 'styled-components';

// components
import Card from '../common/Card';
import Input from '../common/Input';
import Timer from '../Timer';

export default class Timers extends React.Component {
  state = {
    inputValue: '',
    timers: [
      { id: 0, label: 'timer 01' },
      { id: 1, label: 'timer 02' },
      { id: 2, label: 'timer 03' }
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  deleteTimer = id => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== id)
    });
  };

  handleKeyUp = e => {
    const { inputValue, timers } = this.state;

    if (e.which === 13) {
      if (inputValue !== '') {
        this.setState({
          inputValue: '',
          timers: timers.concat({
            id: this.uuid(),
            label: inputValue
          })
        });
      }
    }
  };

  render() {
    const { inputValue, timers } = this.state;

    return (
      <Card>
        <Input
          value={inputValue}
          onChange={e =>
            this.setState({
              inputValue: e.target.value
            })}
          onKeyUp={this.handleKeyUp}
        />

        <List>
          {
            timers.map(timer => (
              <Timer key={timer.id} {...timer} onDelete={() => this.deleteTimer(timer.id)} />
            ))
          }
        </List>

      </Card>
    );
  }
}

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
