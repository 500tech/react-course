import React from 'react';
import styled from 'styled-components';

const Input = (props) => (
  <StyledInput
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

export default Input;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #444;
  box-sizing: border-box;
  padding: 0 20px;
  border-radius: 3px;
`;
