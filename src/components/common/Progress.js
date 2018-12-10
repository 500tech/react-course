import React from 'react';
import styled from 'styled-components';

const Progress = ({ margin, value }) => {
  let background = 'blue';

  if (value < 50) {
    background = '#b72c2d';
  }

  if (value === 100) {
    background = '#45b74a';
  }

  return (
    <Outer margin={margin}>
      <Inner
        value={value}
        background={background}
      />
    </Outer>
  );
};

export default Progress;

const Outer = styled.div`
  width: 100%;
  height: 10px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  background: #dadada;
  margin: ${({ margin }) => margin || 0};
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 300ms;
  width: ${({ value }) => `${value}%`};
  height: 100%;
  background: ${({ background }) => background};
`;
