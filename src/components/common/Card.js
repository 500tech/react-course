import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Card = props => (
  <Fade cascade>
    <Container>{props.children}</Container>
  </Fade>
);

export default Card;

const Container = styled.div`
  width: 400px;
  min-height: 600px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dadada;
  box-shadow: 0 5px 20px rgba(0, 0 ,0 ,0.2);
`;
