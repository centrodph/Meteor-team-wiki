import {
  FETCH_TEAMS,
  FETCH_TEAMS_ERROR,
  FETCH_TEAMS_SUCCESS,
  CREATE_TEAM_SUCCESS
} from './types';
import { TeamCollection } from '../../imports/collections/team';

export function fetchTeamsLoaded(teams) {
  console.log('fetchTeamsLoaded', teams);
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: teams
  };
}
export function fetchTeams() {
  console.log('fetchTeams');
  return (dispatch, getState) => {
    console.log('ssssssssssssssssssssssss');
    Meteor.subscribe('myteams');
    return dispatch(fetchTeamsLoaded(TeamCollection.find({}).fetch()));
  };
}

export function createTeamSuccess(team) {
  console.log('createTeamSuccess', team);
  return {
    type: CREATE_TEAM_SUCCESS,
    payload: team
  };
}
export function createTeam(name, description) {
  console.log('createTeam', name, description);
  return (dispatch, getState) => {
    Meteor.call(
      'teamcollection.create',
      name.value,
      description.value,
      function(err, result) {
        if (err) {
          throw new Error('UNABLE TO CREATE TEAM');
        }
        //return dispatch(createTeamSuccess(result));
        return dispatch(fetchTeams());
      }
    );
  };
}
