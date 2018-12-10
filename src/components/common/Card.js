import React from 'react';
import styled from 'styled-components';

const Card = ({ children, width }) =>
  (<Container width={width}>{children}</Container>);

export default Card;

const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  min-height: 100px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
`;
