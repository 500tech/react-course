const apiRequest = (base) => ({
  BASE: base,
  PENDING: `${base}_PENDING`,
  ERROR: `${base}_ERROR`,
  SUCCESS: `${base}_SUCCESS`,
});

export const API_REQUEST = 'API_REQUEST';

export const ADD = 'ADD';

export const FETCH_TIMERS = apiRequest('FETCH_TIMERS');
