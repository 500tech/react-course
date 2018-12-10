const initialState = {
  email: '',
  token: '',
  role: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
