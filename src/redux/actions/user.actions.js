import * as AT from '../action.types';

export const setUser = user => ({
  type: AT.SET_USER,
  payload: { user }
});
