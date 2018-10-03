import React from 'react';
import styled from 'styled-components';

const List = (props) => (
  <Container>
    {
      props.data.map(item => <Item key={item.id}>{item.label}</Item>)
    }
  </Container>
);

export default List;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid #444;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 20px;
`;
