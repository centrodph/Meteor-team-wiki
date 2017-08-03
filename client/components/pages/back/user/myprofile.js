import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class MyProfile extends Component {

  render() {
    return (
      <div className="team-contener">
        {JSON.stringify(this.props.myprofile)}
      </div>
    );
  }
}

export default createContainer(function(props) {
  Meteor.subscribe('myprofile');
  return { myprofile: Meteor.users.find({}).fetch() };
}, MyProfile);
