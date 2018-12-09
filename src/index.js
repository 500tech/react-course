import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { css } from 'styled-components';

const list = [
  'eggs',
  'bread',
  'milk'
];

const App = () => (
  <Page>
    <Card>
      {
        list.map(label => (
          <Item key={label}>
            {label}
          </Item>
        ))
      }
    </Card>
  </Page>
);

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  border: 1px solid #444;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  height: 50px;
  background: #444;
  margin-bottom: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    background: red;
    pointer-evens: none;
  `}
`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
