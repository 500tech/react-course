import * as AT from '../action.types';

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case AT.ADD_COUNTER:
      return state + payload.amount;

    case AT.SUB_COUNTER:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
