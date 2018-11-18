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
    modalOpen: false,
    isToggleActive: false
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

  modalContent() {
    const { match } = this.props;

    return (
      <span>
        <Title dark>Modal for timer - {match.params.id}</Title>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </span>
    );
  }

  toggleTimers = () => this.setState(prevState => ({ isToggleActive: !prevState.isToggleActive }));

  timerRenderer(timer) {

    return (
      <div></div>
    );
  }

  render() {
    const { data, modalOpen, isToggleActive } = this.state;

    return (
      <Page>
        <Modal
          isOpen={modalOpen}
          toggleOpen={this.toggleModal}
        >
          {this.modalContent()}
        </Modal>
        <Header />

        <Box>
          <TopBar>
            <Titles>
              <Title>Time Tracker</Title>
              <Subtitle>{data.length} activities</Subtitle>
            </Titles>
            <Toggle
              active={isToggleActive}
              onClick={this.toggleTimers}
            />
          </TopBar>

          <Card justify="space-between">
            <Input
              placeholder="timer label"
              onRef={this.handleInputRef}
            />
            <Button onClick={this.addActivity}>add new</Button>
          </Card>

          <TimersContainer isGrid={isToggleActive}>
            {data.map(timer =>
              <Timer
                key={timer.id}
                {...timer}
                removeTimer={this.removeActivity}
                timerRenderer={this.timerRenderer}
              />
            )}
          </TimersContainer>
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
  color: ${({ dark }) => dark ? '#000' : '#fff'};
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 10px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggle = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: ${({ active }) => active ? '#000' : '#fff'};
`;

const TimersContainer = styled.div`
  display: flex;
  flex-direction: ${({ isGrid }) => isGrid ? 'row' : 'column'};
`;
