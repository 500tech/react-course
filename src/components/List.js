import React from 'react';
import styled from 'styled-components';
import Checkbox from './common/Checkbox';

const List = ({ data, updateRow }) => {
  return (
    <Container>
      {
        data.map(item => (
          <Item key={item.id}>
            <Checkbox
              checked={item.checked}
              onChange={checked => updateRow(item.id, checked)} />
            <Label checked={item.checked}>{item.label}</Label>
          </Item>
        ))
      }
    </Container>
  );
};

export default List;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  min-height: 40px;
  align-items: center;
`;
const Label = styled.div`
  font-size: 14px;
  color: #444;
  text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
`;
