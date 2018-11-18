import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <Container>
    {props.children}
  </Container>
);

export default Card;

const Container = styled.div`
  width: 30vw;
  min-height: 100px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
