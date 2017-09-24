import { LOGIN_SUCCESS } from '../actions/types';
export default function(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
      break;
    default:
      return state;
  }
}
