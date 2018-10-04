import * as AT from '../action.types';

const initialState = [];
const timersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.REMOVE_TIMER:
      return state.filter(timer => timer.id !== action.payload.id);

    case AT.ADD_TIMER:
      return state.concat(action.payload.timer);

    // case AT.LOGOUT:
    //   return initialState;

    default:
      return state;
  }
};

export default timersReducer;
