import React from 'react';
import styled from 'styled-components';

// components
import Button from './common/Button';
import Card from './common/Card';
import Input from './common/Input';
import Timers from './Timers';

const App = () => {
  return (
    <StyledPage>
      <StyledHeader>
        <StyledTitle>my timers</StyledTitle>
        <StyledSubtitle>2 timers</StyledSubtitle>
      </StyledHeader>

      <Content>
        <Card>
          <Input />
          <Button>add timer</Button>
        </Card>

        <Timers />
      </Content>

    </StyledPage>
  );
};

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
