import React from 'react';
import styled from 'styled-components';

const Button = props => (
  <Container onClick={props.onClick}>
    {props.children}
  </Container>
);

export default Button;

const Container = styled.div`
  display: flex;
  font-size: 12px;
  padding: 8px 20px;
  background: #3f6bff;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 300ms;
  
  &:hover { background: #000; }
`;
