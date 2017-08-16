import React, { Component } from 'react';

class Redirect extends Component {
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
