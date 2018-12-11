const apiRequest = base => ({
  base,
  PENDING: `${base}_PENDING`,
  ERROR: `${base}_ERROR`,
  SUCCESS: `${base}_SUCCESS`
});

export const API_REQUEST = 'API_REQUEST';

// COUNTER ACTIONS
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';

// TASKS ACTIONS
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const FETCH_TASKS = apiRequest('FETCH_TASKS');
