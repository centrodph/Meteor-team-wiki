import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Redirect from '../parts/redirect';
import Header from '../parts/header';
import Footer from '../parts/footer';
import MiniChat from '../parts/minichat';
import MyTeams from './back/team/myteams';
import CreateTeam from './back/team/team_create';
import MyProfile from './back/user/myprofile';

class Dashboard extends Redirect {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Switch>
          <Route exact path="/dashboard" component={MyTeams} />
          <Route path="/dashboard/team/:teamId" component={CreateTeam} />
          <Route path="/dashboard/myprofile" component={MyProfile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
