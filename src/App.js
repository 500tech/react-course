import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderBg />
        <InnerContainer>
          <Header>
            <Title>Time Tracker</Title>
            <Subtitle>2 items</Subtitle>
            <Card>
              <Input placeholder="your awesome title" />
              <Button>add new</Button>
            </Card>
          </Header>
        </InnerContainer>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fafafa;
`;

const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 210px;
  background: #484FFF;
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 100px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
   font-size: 30px;
   color: #fff;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #444;
  color: #fff;
`;

const Card = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-top: 20px;
  align-items: center;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,0.2);
`;

const Input = styled.input`
  border: 1px solid #cacaca;
  background: #fff;
  height: 30px;
  margin-right: 10px;
  flex: 1;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0 10px;
`;

const Button = styled.div`
  width: 100px;
  background: #484eff;
  color: #fff;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  transition: all 300ms;
  
  &:hover {
    background: #000;
  }
`;
