import * as AT from '../action.types';

export const addTask = task => ({
  type: AT.ADD_TASK,
  payload: { task }
});

export const toggleTask = (id, checked) => ({
  type: AT.TOGGLE_TASK,
  payload: { id, checked }
});
