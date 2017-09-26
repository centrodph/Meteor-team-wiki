import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions/team_actions';
import CreateTeam from './team_create';

class TeamList extends Component {
  getListTeam() {
    return this.props.teams.map(team => {
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
    console.log('TeamList', this.props);
    return (
      <div className="team-list">
        <h3>My Teams</h3>
        <div className="team-boxes">
          {this.getListTeam()}
        </div>
        <CreateTeam />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    teams: state.myteams
  };
}
export default connect(mapStateToProps, { fetchTeams })(TeamList);
