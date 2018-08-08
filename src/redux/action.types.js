const apiAction = (base) => ({
  BASE: base,
  PENDING: `${base}_PENDING`,
  SUCCESS: `${base}_SUCCESS`,
  ERROR: `${base}_ERROR`,
});

export const ADD_TIMER = 'ADD_TIMER';
export const DELETE_TIMER = 'DELETE_TIMER';

export const FIREBASE = 'FIREBASE';

export const FETCH_TIMERS = apiAction('FETCH_TIMERS');
