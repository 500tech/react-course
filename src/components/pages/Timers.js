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
      { id: 1, label: 'timer 01' },
      { id: 2, label: 'timer 01' }
    ]
  };

  handleKeyUp = e => {
    if (e.which === 13) {
      this.setState({
        inputValue: '',
        timers: this.state.timers.concat({
          id: this.state.timers.length,
          label: this.state.inputValue
        })
      });
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
              <Timer key={timer.id} {...timer} />
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
