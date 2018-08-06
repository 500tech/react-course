import * as AT from '../action.types';

const initialState = [];

const timersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_TIMER:
      return state.concat(action.payload.timer);

    case AT.DELETE_TIMER:
      return state.filter(timer => timer.id !== action.payload.id);

    default:
      return state;
  }
};

export default timersReducer;
