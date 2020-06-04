import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "./types";
import history from '../../history';
console.log(history)

const userLogin = username => ({
  type: AUTH_LOGIN,
  username,
});

const userLogout = () => ({
  type: AUTH_LOGOUT,
});

const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username !== "" ? resolve(username) : reject("Please enter a username");
    }, 1000),
  );

const doLogin = username => async dispatch => {
    console.log('do login', username)
    try {
        const userResponse = await fakeLoginRequest(username);
        dispatch(userLogin(userResponse));
        history.push("/home");
  } catch (error) {
    alert(error);
  } 
};

const doLogout = () => dispatch => {
  dispatch(userLogout());
};

export default { doLogin, doLogout };