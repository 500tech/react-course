import React from 'react';
import styled from 'styled-components';

// components
import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';

const Login = props => {
  return (
    <Container>
      <Card width="300px">
        <Input
          margin="0 0 20px 0"
          placeholder="Email"
          onKeyDown={() => {}}
        />
        <Input
          margin="0 0 20px 0"
          placeholder="Password"
          type="password"
          onKeyDown={() => {}}
        />
        <Button onClick={() => props.history.push('/tasks')}>
          login
        </Button>
      </Card>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;
