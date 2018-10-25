import React from 'react';
import { connect } from 'react-redux';

// import { withRouter } from 'react-router';

class Content extends React.Component {
  componentDidUpdate(prevProps) {

    if (!this.props.token && prevProps.token) {
      // this.props.history.push('/login');
      // use the HOC!
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.currentUser.token
});

export default connect(
  mapStateToProps
)(Content);
