import { getID } from './lib/utils';
import { createStore } from 'redux';
import reducer from './reducers/root';

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false },
    { id: getID(), title: 'Omelette', favorite: true },
    { id: getID(), title: 'Dog Food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;