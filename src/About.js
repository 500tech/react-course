import React from 'react';

export default class About extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        about
        <div onClick={() => history.push('/timers')}>go to timers</div>
      </div>
    );
  }
}
