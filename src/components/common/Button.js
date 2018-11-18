import React from 'react';
import styled from 'styled-components';

const Button = props => (
  <Container onClick={props.onClick}>
    {props.label}
  </Container>
);

export default Button;

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  background: #000066;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    background: #0000cf;  
  }
`;
