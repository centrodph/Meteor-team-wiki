import {
  FETCH_TEAMS,
  FETCH_TEAMS_ERROR,
  FETCH_TEAMS_SUCCESS,
  CREATE_TEAM_SUCCESS,
  CURRENT_TEAM_SUCCESS,
  INVALID_TEAM
} from './types';
import { TeamCollection } from '../../imports/collections/team';

export function fetchTeamsLoaded(teams) {
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: teams
  };
}

export function fetchTeams() {
  return (dispatch, getState) => {
    Tracker.autorun(() => {
      Meteor.subscribe('myteams');
      dispatch(fetchTeamsLoaded(TeamCollection.find({}).fetch()));
    });
  };
}

export function createTeamSuccess(team) {
  return {
    type: CREATE_TEAM_SUCCESS,
    payload: team
  };
}

export function currentTeamSuccess(teams) {
  if (teams.length != 1) {
    return {
      type: CURRENT_TEAM_SUCCESS,
      error: 'Acceso denegado',
      payload: teams
    };
  }
  return {
    type: CURRENT_TEAM_SUCCESS,
    error: false,
    payload: teams[0]
  };
}
export function fetchCurrentTeam({ teamId }) {
  console.log(teamId);
  return (dispatch, getState) => {
    Tracker.autorun(() => {
      Meteor.subscribe('currentteam', teamId);
      dispatch(currentTeamSuccess(TeamCollection.find(teamId).fetch()));
    });
  };
}

export function createTeam(name, description) {
  return (dispatch, getState) => {
    Meteor.call('teamcollection.create', name, description, function(
      err,
      result
    ) {
      if (err) {
        alert(err.message);
      }
      return dispatch(fetchTeams());
    });
  };
}

export function adminTeam(id, { name, description }) {
  return (dispatch, getState) => {
    Meteor.call('teamcollection.update', id, name, description, function(
      err,
      result
    ) {
      if (err) {
        throw new Error('UNABLE TO EDIT TEAM');
      }
      return dispatch(fetchTeams());
    });
  };
}
