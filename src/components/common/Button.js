import React from 'react';
import styled from 'styled-components';

const Button = props => (
  <StyledContainer onClick={props.onClick}>
    {props.children}
  </StyledContainer>
);

export default Button;

const StyledContainer = styled.div`
  padding: 6px 12px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 300ms;
  cursor: pointer;
  
  &:hover {
    background: #444;
  }
`;
