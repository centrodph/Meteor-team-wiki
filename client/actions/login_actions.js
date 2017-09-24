import { LOGIN_ERROR, LOGIN_SUCCESS } from './types';

export function autenticateSuccess(isLogin) {
  return {
    type: LOGIN_SUCCESS,
    payload: isLogin
  };
}
export function autenticateError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
}

export function doLogin(email, password) {
  return (dispatch, getState) => {
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        return dispatch(autenticateError(err));
      }
      return dispatch(autenticateSuccess(true));
    });
  };
}
