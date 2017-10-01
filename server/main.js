import { Meteor } from 'meteor/meteor';
import { MiniChatCollection } from '../imports/collections/minichat';
import { TeamCollection } from '../imports/collections/team';
import { Email } from 'meteor/email';

Meteor.startup(() => {
  console.log('Minichat Publication');
  //Minichat Publication
  Meteor.publish('minichatcollection', function() {
    return MiniChatCollection.find({});
  });
  Meteor.publish('myprofile', function() {
    return Meteor.users.find({ _id: this.userId });
  });
  Meteor.publish('usernames', function(ids) {
    return Meteor.users.find({ _id: { $in: ids } });
  });
  //publish My teams
  Meteor.publish('myteams', function() {
    return TeamCollection.find({ users: { $in: [this.userId] } });
  });
  Meteor.publish('currentteam', function(teamId) {
    return TeamCollection.find({
      _id: { $eq: teamId },
      users: { $in: [this.userId] }
    });
  });

  //TeamCollection.remove({}); //Clear test Teams
  //Meteor.users.remove({}); //Clear test Users
});
