import * as AT from '../action.types';

export const addTimer = timer => ({
  type: AT.ADD_TIMER,
  payload: { timer }
});

export const removeTimer = id => ({
  type: AT.REMOVE_TIMER,
  payload: { id }
});
