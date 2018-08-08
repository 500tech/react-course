const apiAction = (base) => ({
  BASE: base,
  PENDING: `${base}_PENDING`,
  SUCCESS: `${base}_SUCCESS`,
  ERROR: `${base}_ERROR`
});

export const FIREBASE = 'FIREBASE';

export const SUBSCRIBE_TIMERS = apiAction('SUBSCRIBE_TIMERS');
export const ADD_TIMER = apiAction('ADD_TIMER');
export const DELETE_TIMER = apiAction('DELETE_TIMER');
