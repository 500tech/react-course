import React from 'react';
// import styled from 'styled-components';
import Card from '../common/Card';
import { get } from 'lodash/fp';

export default class Details extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Card>
        {`Details for timer - ${get('params.id', match)}`}
      </Card>
    );
  }
}
