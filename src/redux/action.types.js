const apiRequest = type => ({
  BASE: type,
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const FETCH_ITEMS = apiRequest('FETCH_ITEMS');

export const API_REQUEST = 'API_REQUEST';

// counter
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';

// timers
export const ADD_TIMER = 'ADD_TIMER';
export const REMOVE_TIMER = 'REMOVE_TIMER';
