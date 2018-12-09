import React from 'react';
import styled from 'styled-components';

// components
import Button from './common/Button';
import Card from './common/Card';
import Input from './common/Input';
import Timers from './Timers';


class App extends React.Component {
  state = {
    list: [
      { id: 0, label: 'foo' },
      { id: 1, label: 'foo 2' },
      { id: 2, label: 'foo 3' },
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addTimer = () => {
    this.setState({
      list: [
        ...this.state.list,
        { id: this.uuid(), label: 'untitled' }
      ]
    });
  };

  render() {
    const { list } = this.state;

    return (
      <StyledPage>
        <StyledHeader>
          <StyledTitle>my timers</StyledTitle>
          <StyledSubtitle>{list.length} timers</StyledSubtitle>
        </StyledHeader>

        <Content>
          <Card>
            <Input />
            <Button onClick={this.addTimer}>add timer</Button>
          </Card>

          <Timers list={list} />
        </Content>

      </StyledPage>
    );
  }
}

export default App;

const StyledPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  width: 100vw;
  height: 300px;
  background: #2d3df4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 40px;
  color: #fff;
  text-transform: capitalize;  
  margin-bottom: 10px;
`;

const StyledSubtitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  text-transform: capitalize;
`;

const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: -50px;
  flex-direction: column;
`;
