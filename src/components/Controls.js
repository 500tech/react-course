import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipes";
import { fetchUser } from "../actions/user";

const Controls = ({ fetchRecipes, fetchUser }) => (
  <span>
    <button onClick={ fetchRecipes }>Recipes</button>
    <button onClick={ fetchUser }>User</button>
  </span>
);

Controls.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired
};

export default connect(null, { fetchRecipes, fetchUser })(Controls);