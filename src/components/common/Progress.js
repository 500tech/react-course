import React from 'react';
import styled from 'styled-components';

const Progress = ({ margin, value }) => {
  return (
    <Outer margin={margin}>
      <Inner
        value={value}
        background={value < 50 ? 'red' : 'blue'}
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
