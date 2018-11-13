import React from 'react';
import styled from 'styled-components';

const Input = ({ onRef, placeholder }) =>
  <StyledInput
    placeholder={placeholder}
    innerRef={onRef}
  />;

export default Input;

const StyledInput = styled.input`
  width: 280px;
  height: 40px;
  background: #fff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 5px;
`;
