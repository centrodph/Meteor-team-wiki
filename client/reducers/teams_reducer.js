import { FETCH_TEAMS_SUCCESS, CREATE_TEAM_SUCCESS } from '../actions/types';
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return [...state, ...action.payload];
      break;
    case CREATE_TEAM_SUCCESS:
      return [...state, ...action.payload];
      break;
    default:
      return state;
  }
}
