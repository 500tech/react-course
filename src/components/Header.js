import React from 'react';
import Button from './common/Button';

export default class Header extends React.Component {
  handleClick = () => {
    this.props.addItem(this.input.value);
    this.input.value = '';
  };

  render() {
    return (
      <div className="header">
        <input
          className="input"
          placeholder="timer description"
          ref={el => this.input = el}
        />
        <Button label="add new" onClick={this.handleClick} />
      </div>
    );
  }
}
