import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToggleBox = ({ title, active, toggle }) => (
  <div className={ classNames('toggle-box', { active }) }
       onClick={ toggle }>
    { title }
  </div>
);

ToggleBox.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default ToggleBox;