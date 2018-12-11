import * as AT from '../action.types';

const initialState = [
  { id: 0, label: 'learn react.js', checked: true },
  { id: 1, label: 'learn redux', checked: false }
];
const tasksReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case AT.ADD_TASK:
      return [
        ...state,
        payload.task
      ];

    case AT.TOGGLE_TASK:
      return state.map(item => ({
        ...item,
        checked: item.id === payload.id ? payload.checked : item.checked
      }));

    // case AT.FETCH_TASKS.SUCCESS:
    //   return action.payload;

    default:
      return state;
  }
};

export default tasksReducer;
