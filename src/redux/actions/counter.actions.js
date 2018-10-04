import * as AT from '../action.types';

export const add = (amount) => ({
  type: AT.ADD_COUNTER,
  payload: { amount }
});

export const sub = () => ({
  type: AT.SUB_COUNTER
});
