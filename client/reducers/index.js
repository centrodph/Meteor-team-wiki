import { combineReducers } from 'redux';
import loginReducer from './login_reducer';
import registerReducer from './register_reducer';
import autenticatedReducer from './autenticated_reducer';
const appReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  autenticated: autenticatedReducer,
  state: (state = { app: 'works' }) => state
});

export default appReducers;
