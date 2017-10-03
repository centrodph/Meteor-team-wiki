import { INVALID_TEAM } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case INVALID_TEAM:
      return { error: 'Acceso denegado.' };
      break;
    default:
      return state;
  }
}
