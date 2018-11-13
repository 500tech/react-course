import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';

const Modal = ({ isOpen, toggleOpen, children }) => {
  return (
    <Overlay isOpen={isOpen}>
      <Card isOpen={isOpen}>
        <CloseIcon onClick={toggleOpen} />
        {children}
      </Card>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 10;
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
  `};
`;

const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  right: -30px;
  top: -30px;
  cursor: pointer;
  
  &:hover { background: red; }
`;
