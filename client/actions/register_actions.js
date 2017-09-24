import { REGISTER_ERROR, REGISTER_SUCCESS } from './types';

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  };
}
export function registerError(error) {
  return {
    type: REGISTER_ERROR,
    payload: error
  };
}

export function doRegister(email, password, username) {
  return (dispatch, getState) => {
    Accounts.createUser({ email, password, username }, err => {
      if (err) {
        return dispatch(registerError(err));
      }
      return dispatch(registerSuccess(true));
    });
  };
}
