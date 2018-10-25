import React from 'react';
import styled, { css } from 'styled-components';
import ClickOutside from './ClickOutside';

export default class Demo extends React.Component {
  state = {
    visible: false
  };

  toggle = () => this.setState(prevState => ({ visible: !prevState.visible }));

  handleClickOut = () => {
    if (this.state.visible) {
      this.toggle();
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <Relative>
        <ClickOutside onClick={this.handleClickOut}>
          <Button onClick={this.toggle}>
            toggle menu
          </Button>

          <Menu visible={visible} />
        </ClickOutside>
      </Relative>
    );
  }
}

const Relative = styled.div`
  position: relative;
`;

const Button = styled.div`
   width: 100px;
   height: 40px;
   background: #000;
   color: #fff;
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 200px;
  min-height: 200px;
  background: red;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  transition: all 300ms;
  margin-top: -20px;
  
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  
  ${({ visible }) => visible && css`
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 0;
  `}
  
`;
