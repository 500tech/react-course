import * as consts from '../consts/action-types';

export const fetchUser = () => ({
  type: consts.API,
  payload: {
    url: 'user.json',
    success: consts.SET_USER
  }
});