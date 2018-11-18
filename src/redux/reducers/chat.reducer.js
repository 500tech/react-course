import * as AT from '../action.types';

const initialState = {
  '123': { id: '123', content: 'hello taboola', userId: '1' },
  '124': { id: '124', content: 'hello world!', userId: '2' }
};

const chatReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case AT.ADD_MESSAGE:
      return {
        ...state,
        [payload.message.id]: payload.message
      };

    default:
      return state;
  }
};

export default chatReducer;
