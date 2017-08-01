import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { TeamCollection } from '../../../../../imports/collections/team';

class MyTeams extends Component {
  createNewTeam() {
    Meteor.call('teamcollection.create', null, null, (error, teamId) => {
      const teamPath = `/dashboard/team/${teamId}`;
      this.props.history.push(`/dashboard/team/${teamId}`);
    });
  }

  getListTeam() {
    return this.props.myteams.map(team => {
      return (
        <div className="team-box" key={team._id}>
          <a href="javascript:void(0);">Edit</a>
          <div className="team-box-name">
            <h3>
              {team.name}
            </h3>
          </div>
          <div className="team-box-description">
            {team.description}
          </div>
          <div className="team-box-actions">
            <button>Go</button>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="team-contener">
        <h3>My Teams</h3>
        <div className="team-boxes">
          {this.getListTeam()}
        </div>
        <a href="#" onClick={this.createNewTeam.bind(this)}>
          Create New Team
        </a>
      </div>
    );
  }
}

export default createContainer(function(props) {
  Meteor.subscribe('myteams');
  return { myteams: TeamCollection.find({}).fetch() };
}, MyTeams);
