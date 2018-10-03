import React from 'react';

class Checkbox extends React.Component {
  state = {
    checked: false
  };

  handleClick = () => {
    const callback = () => this.props.onChange(this.state.checked);
    this.setState(prevState =>
      ({ checked: !prevState.checked }), callback);
  };

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onClick={this.handleClick}
      />
    );
  }
}

// controlled component
// const Checkbox = props => (
//   <input
//     type="checkbox"
//     checked={props.checked}
//     onClick={props.onClick}
//   />
// );

export default class App extends React.Component {
  render() {
    return (
      <Checkbox onChange={(value) => console.log({ value })} />
    );
  }
}
