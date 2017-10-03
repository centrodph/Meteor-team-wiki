import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from '../notice';

class TeamAdmin extends Component {
  render() {
    if (this.props.team.error) {
      return <Notice msgtype="error" msg={this.props.team.error} />;
    }
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
