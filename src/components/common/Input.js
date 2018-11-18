import React from 'react';
import styled from 'styled-components';

const Input = (props) => (
  <Container>
    {props.label && (<Label>{props.label}</Label>)}
    <StyledInput
      ref={props.onRef}
      type={props.type || 'text'}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </Container>
);

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.div`
  color: #7d7d7d;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 300;
  color: #444;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  transition: all 300ms;
  
  &:focus {
    border-color: #3f6bff;
  }
`;
