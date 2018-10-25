import React from 'react';
import styled from 'styled-components';

export default class ClickOutside extends React.Component {
  componentWillMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = event => {
    const { onClick } = this.props;

    if (this.el && !this.el.contains(event.target)) {
      if (onClick) {
        onClick();
      }
    }
  };

  render() {
    const { children } = this.props;

    return <Relative innerRef={el => (this.el = el)}>{children}</Relative>;
  }
}

const Relative = styled.div`
  position: relative;
`;
