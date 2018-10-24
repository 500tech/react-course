import React from 'react';
import styled, { css } from 'styled-components';

const disabledStyles = css`
  opacity: 0.5;
`;

const Button = (props) => (
  <Container disabled={false} onClick={props.handleClick}>
    {props.label}
  </Container>
);

export default Button;

const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  transition: all 300ms;
 
  ${({ disabled }) => disabled && disabledStyles}
  
  &:hover { background: #000; }
`;
