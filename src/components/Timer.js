import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

export default class Timer extends React.Component {
  state = {
    time: moment({ minutes: 0, seconds: 0 })
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time.add(1, 'seconds')
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { id, label } = this.props;
    const { time } = this.state;

    return (
      <Container key={id}>
        {label} | delete | show | {time.format('mm:ss')}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 30px;
  background: #dadada;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 0 20px;
`;
