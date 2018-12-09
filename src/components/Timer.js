import React from 'react';
import styled from 'styled-components';

// components
import Card from './common/Card';

const Timer = ({label}) => {
  return (
    <Card>
      <Label>{label}</Label>
      <Label color="red">delete</Label>
    </Card>
  );
};

export default Timer;

const Label = styled.div`
  font-size: 16px;
  text-transform: capitalize;
  color: ${props => props.color || '#444' };
`;
