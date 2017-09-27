import {
  FETCH_TEAMS,
  FETCH_TEAMS_ERROR,
  FETCH_TEAMS_SUCCESS,
  CREATE_TEAM_SUCCESS
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

export function createTeam(name, description) {
  return (dispatch, getState) => {
    Meteor.call('teamcollection.create', name, description, function(
      err,
      result
    ) {
      if (err) {
        throw new Error('UNABLE TO CREATE TEAM');
      }
      return dispatch(fetchTeams());
    });
  };
}
