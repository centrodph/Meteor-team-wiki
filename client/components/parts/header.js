import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import UserStatus from '../business/userstatus';

class Header extends UserStatus {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-contener">
        <div className="header-app-name">Meteor Wiki</div>
        <div className="header-app-profile">
          {this.getUserName()}
        </div>
      </div>
    );
  }
}

export default createContainer(props => {
  return { myuser: Meteor.users.find({}).fetch() };
}, Header);
