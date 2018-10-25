import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


const counter = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

class createStore {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;

    this.listeners = [];

    this.dispatch({ type: '@@INIT_REDUX' });
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    this.listeners.forEach(listener => listener());
  }

  getState() {
   return this.state;
  }
}

const store = new createStore(counter);

store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
