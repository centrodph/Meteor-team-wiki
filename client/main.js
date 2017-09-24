import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import _Hammer from 'hammerjs';
import '/node_modules/materialize-css/dist/js/materialize';

// made global
Hammer = _Hammer;
Materialize = window.Materialize;

//Custom
import appReducers from './reducers';

//Setup Middlewares
const createAppStore = applyMiddleware(thunk)(createStore);

//components
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Administration from './components/admin';
import TeamList from './components/team/team_list';

const routes = (
  <Provider store={createAppStore(appReducers)}>
    <BrowserRouter history={browserHistory}>
      <div>
        <Route component={Header} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin/team" component={TeamList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.appcontent'));
});
