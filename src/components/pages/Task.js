import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { find } from 'lodash';

// components
import Card from '../common/Card';

const Task = props => {
  const { tasks, match } = props;
  const id = parseInt(match.params.id, 10);
  const task = find(tasks, task => task.id === id);

  let label = 'not found!';
  if (task) {
    label = task.label;
  }

  return (
    <Container>
      <Card width="300px">
        {label}
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Task);

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;
