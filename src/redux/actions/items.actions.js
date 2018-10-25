import * as AT from '../action.types';

export const fetchItems = () => ({
  type: AT.API_REQUEST,
  payload: {
    url: '/items',
    method: 'GET',
    baseAction: AT.FETCH_ITEMS
  }
});
