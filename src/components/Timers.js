import React, { Component } from 'react';
import styled from 'styled-components';

import Timer from './Timer';
import Card from './common/Card';
import Button from './common/Button';
import Input from './common/Input';
import Modal from './common/Modal';

class Timers extends Component {
  state = {
    data: [
      { id: 0, label: 'timer' },
      { id: 1, label: 'timer' },
      { id: 2, label: 'timer' }
    ],
    modalOpen: false
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ modalOpen: true });
    }
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const id = this.props.match.params.id;

    if (prevId !== id && id) {
      this.setState({ modalOpen: true });
    }
  }

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addActivity = () => {
    this.setState({
      data: [
        ...this.state.data,
        { id: this.uuid(), label: this.input.value || 'untitled' }
      ]
    }, () => {
      this.input.value = '';
    });
  };

  removeActivity = id => {
    this.setState({
      data: this.state.data.filter(timer => timer.id !== id)
    });
  };

  handleInputRef = el => this.input = el;

  toggleModal = () => this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));

  render() {
    const { data, modalOpen } = this.state;

    return (
      <Page>
        <Modal
          isOpen={modalOpen}
          toggleOpen={this.toggleModal}
        />
        <Header />
        <Box>
          <Title>Time Tracker</Title>
          <Subtitle>{data.length} activities</Subtitle>
          <Card>
            <Input
              placeholder="timer label"
              onRef={this.handleInputRef}
            />
            <Button onClick={this.addActivity}>add new</Button>
          </Card>

          {data.map(timer =>
            <Timer
              key={timer.id}
              {...timer}
              removeTimer={this.removeActivity}
            />
          )}
        </Box>
      </Page>
    );
  }
}

export default Timers;

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100vw;
  height: 400px;
  background: #3f6bff;
`;

const Box = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: -200px;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 10px;
`;
