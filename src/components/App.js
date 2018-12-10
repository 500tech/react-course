import React from 'react';
import styled from 'styled-components';

const App = () => (
  <Container>
    <Title>hello Wobi!</Title>
  </Container>
);

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: #444;
  padding: 10px 20px;
  border: 5px solid #dadada;
  animation: rotate 4s infinite;

  @keyframes rotate {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
`;

