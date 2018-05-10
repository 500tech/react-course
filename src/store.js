import { getID } from './lib/utils';
import { createStore } from 'redux';
import reducer from './reducers/root';

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false, desc: 'Very nice but hard' },
    { id: getID(), title: 'Omelette', favorite: true, desc: 'Tasty but not dessert' },
    { id: getID(), title: 'Dog Food', favorite: true, desc: 'I never tried' }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;