import React from 'react';

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
        <div
          className="button"
          onClick={this.handleClick}>
          add new
        </div>
      </div>
    );
  }
}
