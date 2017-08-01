import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'teamcollection.create': function(name, description) {
    return TeamCollection.insert({
      name,
      description,
      createdAt: new Date(),
      owner: this.userId,
      invitations: [],
      users: [this.userId],
      documents: [],
      channels: []
    });
  },
  //Only can be access for owner
  'teamcollection.invite': function(team, email) {
    return TeamCollection.update(
      { _id: { $eq: team._id }, owner: { $eq: this.userId } },
      { $push: { invitations: email } }
    );
  },
  'teamcollection.acceptinvitation': function(teamId) {
    return TeamCollection.update(teamId, { $push: { users: this.userId } });
  }
});

export const TeamCollection = new Mongo.Collection('teamcollection');
