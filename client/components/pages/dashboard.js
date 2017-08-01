import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Redirect from '../parts/redirect';
import Header from '../parts/header';
import Footer from '../parts/footer';
import MiniChat from '../parts/minichat';
import MyTeams from './back/team/myteams';
import CreateTeam from './back/team/team_create';

class Dashboard extends Redirect {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/dashboard" component={MyTeams} />
          <Route path="/dashboard/team/:teamId" component={CreateTeam} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
