import * as AT from '../action.types';

export const addTimer = (timer) => ({
  type: AT.ADD_TIMER,
  payload: { timer }
});

export const deleteTimer = (id) => ({
  type: AT.DELETE_TIMER,
  payload: { id }
});

export const fetchTimers = () => ({
  type: AT.FIREBASE,
  meta: {
    method: 'once',
    url: '/timers',
    baseAction: AT.FETCH_TIMERS
  }
});
