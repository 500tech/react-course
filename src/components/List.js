import React from 'react';
import styled from 'styled-components';
import Checkbox from './common/Checkbox';
import { withRouter } from 'react-router';

const List = ({ data, updateRow, history }) => {
  return (
    <Container>
      {
        data.map(item => (
          <Item key={item.id}>
            <Checkbox
              checked={item.checked}
              onChange={checked => updateRow(item.id, checked)} />
            <Label
              checked={item.checked}
              onClick={() => history.push(`/todos/${item.id}`)}
            >
              {item.label}
            </Label>
          </Item>
        ))
      }
    </Container>
  );
};

export default withRouter(List);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 500ms forwards;
  margin-top: -10px;
  
  @keyframes fadeIn {
    100% {
      margin-top: 0; 
      opacity: 1; 
    }
  }
`;
const Label = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${({ checked }) => checked ? '#dadada' : '#444'};
  text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
`;
