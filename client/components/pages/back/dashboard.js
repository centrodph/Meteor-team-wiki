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

//Custom Parts
import Redirect from '../parts/redirect';
import Header from '../parts/header';
import Footer from '../parts/footer';

//Pages
import MyTeams from './team/myteams';
import CreateTeam from './team/team_create';
import MyProfile from './user/myprofile';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Redirect history={this.props.history} />
        <Header currentpath={this.props.location.pathname} />
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
