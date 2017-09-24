import { REGISTER_ERROR } from '../actions/types';
export default function(state = { error: null }, action) {
  switch (action.type) {
    case REGISTER_ERROR:
      return { error: action.payload };
      break;
    default:
      return state;
  }
}
