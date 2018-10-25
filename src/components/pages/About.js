import React from 'react';
import Section from '../Section';

export default class About extends React.Component {
  render() {
    const { history,match } = this.props;
    console.log(this.props);

    return (
      <div
        onClick={() => history.push('/dashboard')}>
        about - {match.params.id}
        <Section />
      </div>
    );
  }
}
