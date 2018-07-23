import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <Container>
    <svg className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  </Container>
);

const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(-100%, -100%);
  
  .spinner {
    flex: 1;
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
  
    & .path {
      stroke: #000;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
