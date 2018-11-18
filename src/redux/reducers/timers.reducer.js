import * as AT from '../action.types';

const initialState = [];

const timersReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case AT.ADD_TIMER:
      return [
        ...state,
        payload.timer
      ];

    case AT.REMOVE_TIMER:
      return state.filter(timer => timer.id !== payload.id);

    default:
      return state;
  }
};

export default timersReducer;
