import { combineReducers } from 'redux';
import loginReducer from './login_reducer';
import registerReducer from './register_reducer';
import autenticatedReducer from './autenticated_reducer';
import teamsReducer from './teams_reducer';
import currentTeamReducer from './current_team_reducer';
import errorReducer from './error_reducer';

const appReducers = combineReducers({
  error: errorReducer,
  login: loginReducer,
  register: registerReducer,
  autenticated: autenticatedReducer,
  myteams: teamsReducer,
  currentTeam: currentTeamReducer,
  state: (state = { app: 'works' }) => state
});

export default appReducers;
