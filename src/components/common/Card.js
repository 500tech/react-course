import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => (<Container>{children}</Container>);

export default Card;

const Container = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  min-height: 100px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin-bottom: 10px;
`;
