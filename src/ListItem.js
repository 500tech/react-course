import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import withSpinner from './withSpinner';

class ListItem extends React.Component {
  state = {
    time: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);

    console.log(this.props);
  }

  render() {
    const { children } = this.props;
    const { time } = this.state;

    return (
      <Row>
        <Label>{children}</Label>
        <Time>{time}</Time>
      </Row>
    );
  }
}

export default withSpinner(withRouter(ListItem));

const Row = styled.div`
  width: 100%;
  margin: 5px 0;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 12px;
  justify-content; space-between;
  font-weight: 300;
`;

const Time = styled.div`
  font-size: 12px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
`;

const Label = styled.div`
  flex: 1;
`;
