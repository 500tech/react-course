import * as AT from '../action.types';

export const add = (amount) => ({
  type: AT.ADD,
  payload: { amount }
});

export const fetchTimers = () => ({
  type: AT.API_REQUEST,
  payload: {
    url: '/timers',
    method: 'GET',
    baseAction: AT.FETCH_TIMERS
  }
});
