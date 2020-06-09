import * as types from "./types";

const initialState = {
  username: (localStorage.getItem('username') ? localStorage.getItem('username') : ''),
  password: "",
  isLoggedIn: (localStorage.getItem('username' === undefined) ? true : false)
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        username: action.username,
        isLoggedIn: true
      };
    case types.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
