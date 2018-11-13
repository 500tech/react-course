import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Card = ({ children }) => (
  <Fade top>
    <Container>{children}</Container>
  </Fade>
);

export default Card;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  min-height: 40px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
  position: relative;
`;
