// import * as AT from '../action.types';
import { set } from 'lodash/fp';

const initialState = {
  requests: 0,
  pendingRequests: {}
};
const networkReducer = (state = initialState, action) => {
  if (action.type.includes('PENDING')) {
    return set('requests', state.requests + 1, state);
  }

  if (action.type.includes('SUCCESS') || action.type.includes('ERROR')) {
    return set('requests', state.requests - 1, state);
  }

  return state;
};

export default networkReducer;
