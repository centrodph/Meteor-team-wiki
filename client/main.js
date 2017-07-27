import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Router, Route, IndexRoute, browserHistory } from 'react-router-dom';

//components
import Header from './components/parts/header';
import MiniChat from './components/parts/minichat';
import Redirect from './components/parts/redirect';

import LoginForm from './components/pages/login';
import SignUp from './components/pages/signup';
import Dashboard from './components/pages/dashboard';

const routes = (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route component={Redirect} />
      <Route exact path="/" component={LoginForm}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={LoginForm}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </BrowserRouter>
);

Meteor.startup(()=>{
    ReactDOM.render(routes,document.querySelector('.appcontent'));
});
