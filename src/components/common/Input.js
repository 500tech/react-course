import React from 'react';
import styled from 'styled-components';

const Input = props => (
  <Container
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

export default Input;

const Container = styled.input`
  width: 300px;
  height: 34px;
  flex: 1;
  border: 1px solid #dadada;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 12px;
  margin-right: 10px;
  transition: all 300ms;
  
  &:focus { border-color: #444; }
`;
