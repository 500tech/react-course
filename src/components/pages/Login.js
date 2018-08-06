import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.history.push('/list')}>
        click here to go to the list
      </div>
    );
  }
}
