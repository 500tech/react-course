import React from 'react';
import styled from 'styled-components';

const App = props => (
  <Page>
    <Header>
      <Input />
      <Button>add item</Button>
    </Header>

    {/*<Content>*/}
      {/*<List>*/}
        {/*<ListItem />*/}
      {/*</List>*/}
    {/*</Content>*/}
  </Page>
);

export default App;

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100vw;
  height: 200px;
  background: #45b1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #444;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Button = styled.div`
  width: 200px;
  height: 50px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #444;
  cursor: pointer;
`;
