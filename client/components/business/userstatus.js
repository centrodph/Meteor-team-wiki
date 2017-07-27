import React, { Component } from 'react';

class UserStatus extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * Custom interface to check user
   * @return {[type]} [description]
   */
  checkUser(){
    return ( Meteor.user() ) ? true : false;
  }

  /**
   * [getUserName description]
   * @return {[type]} [description]
   */
  getUserName(){
    const { emails: [{address}] } = Meteor.user();
    return address;
  }
}

export default UserStatus;
