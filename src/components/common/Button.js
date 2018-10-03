import React from 'react';
import styled from 'styled-components';

const Button = (props) => (
  <StyledButton onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

export default Button;

const StyledButton = styled.div`
  width: 200px;
  height: 30px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #444;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  transition: all 300ms;
  
  &:hover {
    background: #405edc;
  }
`;
