import React from 'react';
import Fade from 'react-reveal/Fade';
import { values } from 'lodash';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions/chat.actions';
import styled from 'styled-components';

import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';

class Chat extends React.Component {
  state = {
    inputVal: ''
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleChange = e => this.setState({ inputVal: e.target.value });

  addMessage = () => {
    this.props.addMessage({
      id: this.uuid(),
      content: this.state.inputVal
    });

    this.input.value = '';
  };

  handleRef = el => this.input = el;

  render() {
    const { messages } = this.props;

    return (
      <Fade top>
        <Card>
          <Input
            label="message"
            onChange={this.handleChange}
            onRef={this.handleRef}
          />
          <Button label="add message" onClick={this.addMessage} />

          <Divider />

          <Fade top cascade>
            {
              values(messages).map(msg => (
                <MessageContainer key={msg.id}>
                  <Avatar>T</Avatar>
                  <Message>
                    {msg.content}
                  </Message>
                </MessageContainer>
              ))
            }
          </Fade>
        </Card>
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat
});

export default connect(mapStateToProps, {
  addMessage
})(Chat);

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #dedede;
  margin: 20px 0;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.div`
  width: calc(100% - 50px);
  background: rgba(64,165,237,0.19);
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
  font-size: 12px;
  color: #444;
  font-weight: 300;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(64,165,237,0.19);
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  font-size: 16px;
  font-weight: bold;
`;
