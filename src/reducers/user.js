import * as consts from '../consts/action-types';

const initialState = null;

const reducer = (user = initialState, action) => {
  switch (action.type) {
    case consts.SET_USER:
      return Object.assign({}, user, action.payload);

    default:
      return user;
  }
};

export default reducer;