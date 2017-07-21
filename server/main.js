import { Meteor } from 'meteor/meteor';
import { MiniChatCollection } from '../imports/collections/minichat';

Meteor.startup(() => {
  //Minichat Publication
  Meteor.publish('minichatcollection',function(){
    return MiniChatCollection.find({});
  });
});
