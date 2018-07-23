import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ListItem from './ListItem';

class App extends Component {
  state = {
    data: [
      // { id: 0, label: 'foo bar', active: true },
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleClick = () => {
    this.setState({
      data: this.state.data.concat({
        id: this.uuid(),
        label: 'untitled',
        active: false
      })
    });
  };

  render() {
    const { data } = this.state;

    return (
      <Container>
        <HeaderBg />
        <InnerContainer>
          <Fade top>
            <Header>
              <Title>Time Tracker</Title>
              <Subtitle>2 items</Subtitle>
              <Card>
                <Input placeholder="your awesome title" />
                <Button onClick={this.handleClick}>add new</Button>
              </Card>
            </Header>
          </Fade>

          <List>
            {data.map(item => (
              <Fade top>
                <ListItem key={item.id}>{item.label}</ListItem>
              </Fade>
            ))}
          </List>
        </InnerContainer>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fafafa;
`;

const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 210px;
  background: #484FFF;
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 100px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
   font-size: 30px;
   color: #fff;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #444;
  color: #fff;
`;

const Card = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-top: 20px;
  align-items: center;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,0.2);
`;

const Input = styled.input`
  border: 1px solid #cacaca;
  background: #fff;
  height: 30px;
  margin-right: 10px;
  flex: 1;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0 10px;
`;

const Button = styled.div`
  width: 100px;
  background: #484eff;
  color: #fff;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  transition: all 300ms;
  
  &:hover {
    background: #000;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px
  margin-top: 5px;
`;
