import React from 'react';
import styled, {css} from 'styled-components';

const Button = props => (
  <Container isDisabled={false} onClick={() => alert(1)}>
    <Label>
      {props.label}
    </Label>
  </Container>
);

export default Button;

const Container = styled.div`
  width: 100px;
  height: 50px;
  background: red;
  transition: all 300ms;
  
  &:hover {
    background: black;
  }
  
  ${({ isDisabled}) => isDisabled && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const Label = styled.h3``;

const SmallLabel = Label.extend`


`;

