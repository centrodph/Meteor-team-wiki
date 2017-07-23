import { Meteor } from 'meteor/meteor';
import { MiniChatCollection } from '../imports/collections/minichat';

Meteor.startup(() => {
  console.log("Minichat Publication");
  //Minichat Publication
  Meteor.publish('minichatcollection',function(){
    return MiniChatCollection.find({});
  });
});
