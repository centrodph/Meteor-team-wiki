import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from '../notice';

class TeamAdmin extends Component {
  constructor(props) {
    super(props);
  }
  submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    console.log(this.props.team);
    if (this.props.team.error) {
      return <Notice msgtype="error" msg={this.props.team.error} />;
    }
    return (
      <div className="team-admin">
        <div className="team-admin-box">
          <h3>Team Admin</h3>
          <form onSubmit={this.submitHandler.bind(this)}>
            <div className="form-input create-team-input-name">
              <label>Team Name</label>
              <input type="text" ref="name" placeholder="Team Name" />
            </div>
            <div className="form-input create-team-input-description">
              <label>Description</label>
              <textarea ref="description" placeholder="Description" />
            </div>
            <div className="form-input login-input-submit">
              <button>Create</button>
            </div>
          </form>
        </div>
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
