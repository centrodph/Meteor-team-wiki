import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  IndexRoute,
  browserHistory
} from 'react-router-dom';

//components
import Home from './components/pages/front/home';
import Dashboard from './components/pages/back/dashboard';

const routes = (
  <BrowserRouter history={browserHistory}>
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.appcontent'));
});
