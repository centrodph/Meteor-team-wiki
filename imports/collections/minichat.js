import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'minichatcollection.insert': function(content) {
     return MiniChatCollection.insert({
       createdAt: new Date(),
       content: content,
       authorId: this.userId
     });
   }
});


export const MiniChatCollection = new Mongo.Collection('minichatcollection');
