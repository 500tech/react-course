import * as AT from '../action.types';

export const addTimer = (timer) => ({
  type: AT.FIREBASE,
  meta: {
    method: 'set',
    url: `/timers/${timer.id}`,
    baseAction: AT.ADD_TIMER
  },
  payload: timer
});

export const deleteTimer = (id) => ({
  type: AT.FIREBASE,
  meta: {
    method: 'remove',
    url: `/timers/${id}`,
    baseAction: AT.DELETE_TIMER
  }
});

export const subscribeToTimers = () => ({
  type: AT.FIREBASE,
  meta: {
    method: 'on',
    url: '/timers',
    baseAction: AT.SUBSCRIBE_TIMERS
  }
});
