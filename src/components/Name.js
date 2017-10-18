import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Name = ({ name }) => (
  <span>{ name }</span>
);

Name.propTypes = {
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  name: state.user.name
});

export default connect(mapStateToProps)(Name);