import * as actions from "../consts/action-types";

const initalState = {
  name: 'Kipi',
  age: 5
};

const reducer = (user = initalState, action) => {

  switch (action.type) {

    case actions.SET_NAME:
      return Object.assign({}, user, {
        name: action.name
      });

    default:
      return user;
  }
};

export default reducer;