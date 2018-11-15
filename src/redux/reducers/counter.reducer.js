import * as AT from '../action.types';

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD:
      return state + action.payload.amount;

    default:
      return state;
  }
};

export default counterReducer
