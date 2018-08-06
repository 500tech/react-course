import React from 'react';

import { connect } from 'react-redux';
import { addTimer } from '../../../redux/actions/timer.actions';

import Header from './Header';
import List from './List';
import moment from 'moment';

class TimerList extends React.Component {
  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addItem = (label) => {
    const timer = {
      id: this.uuid(),
      label: label || 'untitled',
      date: moment().format('MMMM DD, YYYY'),
      isFavorite: false,
      isRunning: true
    };

    this.props.addTimer(timer);
  };

  render() {
    return (
      <div>
        <Header addItem={this.addItem} />
        <List items={this.props.timers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timers: state.timers
});

export default connect(mapStateToProps, { addTimer })(TimerList);
