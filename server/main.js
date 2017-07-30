import { Meteor } from 'meteor/meteor';
import { MiniChatCollection } from '../imports/collections/minichat';
import { Email } from 'meteor/email';

Meteor.startup(() => {
  console.log("Minichat Publication");
  //Minichat Publication
  Meteor.publish('minichatcollection',function(){
    return MiniChatCollection.find({});
  });
  Meteor.publish('usernames',function(ids){
    return Meteor.users.find({_id : {$in:ids}});
  })



  //process.env.MAIL_URL = "smtp://codigo1888:()U`XnW~*8\hk>~9@smtp.gmail.com:587";


  //()U`XnW~*8\hk>~9

  // Email.send({
  //   to: "centrodph@gmail.com",
  //   from: "codigo1888@gmail.com",
  //   subject: "Example Email",
  //   text: "The contents of our email in plain text.",
  // });



});
