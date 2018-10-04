import React from 'react';
import styled from 'styled-components';


// comps
import Button from './common/Button';
import Input from './common/Input';
import List from './List';

export default class TasksList extends React.Component {
  state = {
    data: [
      { id: '123', label: 'item 1' },
      { id: '124', label: 'item 2' },
      { id: '125', label: 'item 3' },
      { id: '126', label: 'item 4' },
    ],
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  render() {
    return (
      <Page>
        <Navigation>500timer</Navigation>
        <Header>
          <Input
            onRef={(el) => this.input = el}
            placeholder="your item name"
            onChange={e => {
            }}
          />
          <Button
            onClick={() => {
              this.setState({
                data: [
                  ...this.state.data,
                  { id: this.uuid(), label: this.input.value }
                ]
              }, () => {
                this.input.value = '';
              });
            }}>add item</Button>
        </Header>

        <List data={this.state.data} />
      </Page>
    );
  }
}

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  width: 100vw;
  height: 50px;
  background: #405edc;
  display: flex;
  box-sizing: border-box;
  padding: 0 50px;
  color: #fff;
  font-size: 12px;
  text-transform: capitalize;
  align-items: center;
`;

const Header = styled.div`
  width: 100vw;
  height: 200px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
