import * as AT from '../action.types';

export const addMessage = message => ({
  type: AT.ADD_MESSAGE,
  payload: { message }
});
