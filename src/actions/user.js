import * as actions from '../consts/action-types';

export const fetchUser = () => ({
  type: actions.API,
  payload: {
    url: 'user.json',
    success: setUser
  }
});

export const setUser = (data) => ({
  type: actions.SET_USER,
  payload: data
});