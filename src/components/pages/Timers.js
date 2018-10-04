import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTimer, removeTimer } from '../../redux/actions/timers.actions';

// components
import Card from '../common/Card';
import Input from '../common/Input';
import Timer from '../Timer';

class Timers extends React.Component {
  state = {
    inputValue: ''
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleKeyUp = e => {
    const { inputValue } = this.state;

    if (e.which === 13) {
      if (inputValue !== '') {
        this.props.addTimer({
          id: this.uuid(),
          label: inputValue
        });

        this.setState({
          inputValue: ''
        });
      }
    }
  };

  render() {
    const { inputValue } = this.state;
    const { timers } = this.props;

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
              <Timer
                key={timer.id}
                {...timer}
                onDelete={() => this.props.removeTimer(timer.id)}
              />
            ))
          }
        </List>

      </Card>
    );
  }
}

const mapStateToProps = state => ({
  timers: state.timers
});

export default connect(mapStateToProps, {
  addTimer,
  removeTimer
})(Timers);

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
