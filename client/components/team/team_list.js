import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamList extends Component {
  render() {
    return (
      <div className="team-list">
        <h3>Team List</h3>
      </div>
    );
  }
}

export default connect()(TeamList);
