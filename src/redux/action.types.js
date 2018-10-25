const apiRequest = type => ({
  BASE: type,
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`
});

export const API_REQUEST = 'API_REQUEST';

export const FETCH_ITEMS = apiRequest('FETCH_ITEMS');

export const ADD = 'ADD';
export const SUB = 'SUB';
