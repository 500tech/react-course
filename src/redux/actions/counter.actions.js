import * as AT from '../action.types';

export const addCounter = (amount) => ({
  type: AT.ADD_COUNTER,
  payload: { amount }
});

export const subCounter = () => ({
  type: AT.SUB_COUNTER
});
