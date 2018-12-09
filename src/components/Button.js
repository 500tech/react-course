import React from 'react';
import styled from 'styled-components';

const Button = props => (
  <StyledContainer onClick={props.onClick}>
    {props.children}
  </StyledContainer>
);

export default Button;

const StyledContainer = styled.div`
  width: 100px;
`;
