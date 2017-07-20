import { Meteor } from 'meteor/meteor';
import { MiniChat } from '../imports/collections/minichat';

Meteor.startup(() => {
  //Minichat Publication
  Meteor.publish('minichat',function(){
    return MiniChat.find({});
  });
});
