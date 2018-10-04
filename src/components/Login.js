import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.history.push('/list')}>click here</div>
    );
  }
}
