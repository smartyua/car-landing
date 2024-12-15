// import api from '../../../lib/api';

import {
  // USER_LOGIN,
  USER_LOGGED_OUT,
  // GET_USER_DATA,
  SET_USER_STATE
} from './types';

export const setUserState = payload => ({
  type: SET_USER_STATE,
  payload
});

export const loginFlow = (endpoint, credentials) =>
  endpoint(credentials).then(user => {
    const { accessToken } = user.userData;
    localStorage.setItem('userJWT', accessToken);
    return user;
  });

// export const login = credentials => {
//   const payload = loginFlow(api.auth.login, credentials);
//   return {
//     type: USER_LOGIN,
//     payload
//   };
// };

// export const facebookLogin = credentials => {
//   const payload = loginFlow(api.auth.facebookLogin, credentials);
//   return {
//     type: USER_LOGIN,
//     payload
//   };
// };

// export const googleLogin = credentials => {
//   const payload = loginFlow(api.auth.googleLogin, credentials);
//   return {
//     type: USER_LOGIN,
//     payload
//   };
// };

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
  payload: {}
});

export const logout = () => dispatch => {
  localStorage.removeItem('userJWT');
  dispatch(userLoggedOut());
};

// export const getUserData = () => ({
//   type: GET_USER_DATA,
//   payload: api.auth.getUserData()
// });
