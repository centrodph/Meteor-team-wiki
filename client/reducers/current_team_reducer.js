import { CURRENT_TEAM_SUCCESS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CURRENT_TEAM_SUCCESS:
      const [current] = action.payload;
      return { state, ...current };
      break;
    default:
      return state;
  }
}
