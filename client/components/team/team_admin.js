import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamAdmin extends Component {
  render() {
    return (
      <div>
        <p>This Page Only can be viewed for the ADMIN</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    team: state.currentTeam
  };
}
export default connect(mapStateToProps)(TeamAdmin);
