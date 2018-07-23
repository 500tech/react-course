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
  height: 500px;
  background: #03A9F4;
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
  width: 600px;
  height: 200px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #444;
  background: #fff;
  height: 40px;
`;

const Button = styled.div`
  width: 100px;
  background: blue;
  color: #fff;
`;
