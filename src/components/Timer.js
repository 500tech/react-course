import React from 'react';
import styled, {css} from 'styled-components';
import moment from 'moment';
import Fade from 'react-reveal/Fade';

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
      <Fade top>
        <Container key={id}>
          <Label>{label}</Label>
          <Label color="red" clickable>delete</Label>
          <Label color="blue" clickable>show</Label>
          <Label>{time.format('mm:ss')}</Label>
        </Container>
      </Fade>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 30px;
  background: #fafafa;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 0 20px;
  justify-content: space-between;
`;

const Label = styled.div`
  color: ${({ color }) => color || '#444'};
  
  ${({ clickable }) => clickable && css`
    cursor: pointer;
    
    &:hover {
      opacity: 0.6;
    }
  `}
`;
