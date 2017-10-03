import { CURRENT_TEAM_SUCCESS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CURRENT_TEAM_SUCCESS:
      return { error: action.error, ...action.payload };
      break;
    default:
      return state;
  }
}
