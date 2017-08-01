import React, { Component } from 'react';
import UserStatus from '../business/userstatus';

class Redirect extends UserStatus {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (!Meteor.userId()) {
      this.props.history.push('/');
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
