import React from 'react';
import styled from 'styled-components';

const Progress = ({ margin, value }) => {
  return (
    <Outer margin={margin}>
      <Inner value={value} />
    </Outer>
  );
};

export default Progress;

const Outer = styled.div`
  width: 100%;
  height: 10px;
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
  background: blue;
`;
