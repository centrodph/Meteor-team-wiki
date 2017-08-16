import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router-dom';

//components
import Home from './components/pages/front/home';

const routes = (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.appcontent'));
});
