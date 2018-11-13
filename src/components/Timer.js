import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Card from './common/Card';

class Timer extends Component {
  handleRemove = () => {
    const { id, removeTimer } = this.props;

    removeTimer(id);
  };

  navigate = () => {
    const { history, id } = this.props;

    history.push(`/timers/${id}`);
  };

  render() {
    const { id, label } = this.props;

    return (
      <Card key={id}>
        <Label>{label}</Label>
        <Label onClick={this.navigate}>show</Label>
        <Label
          color="red"
          onClick={this.handleRemove}
        >
          delete
        </Label>
      </Card>
    );
  }
}

export default withRouter(Timer);

const Label = styled.div`
  font-size: 14px;
  color: ${({ color }) => color || '#444'};
  margin: 0 10px;
  text-transform: capitalize;
  cursor: pointer;
`;
