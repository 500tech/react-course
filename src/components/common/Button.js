import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default Button;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #444;
  height: 40px;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    background: #000;
  }
`;
