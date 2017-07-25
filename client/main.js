import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Router, Route, IndexRoute, browserHistory } from 'react-router-dom';

//components
import Header from './components/parts/header';
import MiniChat from './components/parts/minichat';

import LoginForm from './components/pages/login';
import Dashboard from './components/pages/dashboard';

const routes = (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route path="/login" component={LoginForm}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route  path="/" component={LoginForm}/>
    </div>
  </BrowserRouter>
);

Meteor.startup(()=>{
    ReactDOM.render(routes,document.querySelector('.appcontent'));
});
