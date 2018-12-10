import React from 'react';
import styled from 'styled-components';

const Input = ({ margin, onKeyDown, onRef }) =>
  <StyledInput
    ref={onRef}
    margin={margin}
    onKeyDown={onKeyDown}
  />;

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 300;
  padding: 0 20px;
  margin: ${({ margin }) => margin || 0};
  transition: all 300ms;
  
  &:focus {
    border-color: #444;
  }
`;
