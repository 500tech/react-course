import React from 'react';
import styled from 'styled-components';

class Checkbox extends React.Component {
  state = {
    checked: this.props.checked
  };

  toggleChecked = () => {
    this.setState(prevState =>
      ({ checked: !prevState.checked }), () => {
      this.props.onChange(this.state.checked);
    });
  };


  render() {
    const { checked } = this.state;

    return (
      <Outer onClick={this.toggleChecked}>
        <Inner checked={checked} />
      </Outer>
    );
  }
}

export default Checkbox;

const Outer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  background: #dadada;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Inner = styled.div`
  width: 12px;
  height: 12px;
  transition: all 300ms;
  background: ${({ checked }) => checked ? 'blue' : 'transparent'};
`;
