import React from 'react';
import styled from 'styled-components';

const Input = props => (
  <StyledInput
    placeholder={props.placeholder || 'untitled'}
    onChange={props.onChange}
    onKeyUp={props.onKeyUp}
    value={props.value}
  />
);

export default Input;

const StyledInput = styled.input`
  border: 1px solid #dadada;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 0 20px;
  color: #444;
  font-weight: 300;
  margin-bottom: 20px;
  border-radius: 4px;
`;
