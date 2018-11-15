import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const Modal = ({ isOpen, toggleOpen }) => {
  return (
    <Fragment>
      <Overlay isOpen={isOpen} />
      <Container isOpen={isOpen}>
        <Card>
          <div onClick={toggleOpen}>
            click to toggle modal
          </div>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: all 500ms;
  
  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    pointer-events: all;
    visibility: visible;  
  `}}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: all 500ms;
  
  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `}}
`;

const Card = styled.div`
  width: 500px;
  height: 400px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
