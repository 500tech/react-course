import React from 'react';
import styled from 'styled-components';

// components
import Card from '../common/Card';

const Task = props => (
  <Container>
    <Card width="300px">
      {props.match.params.id}
    </Card>
  </Container>
);

export default Task;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;
