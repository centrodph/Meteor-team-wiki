export function createTeam({ name, description }) {
  const teamId = Meteor.call(
    'teamcollection.create',
    null,
    null,
    (error, teamId) => {
      return teamId;
    }
  );
  return {
    type: TEAM_CREATE,
    payload: teamId
  };
}
