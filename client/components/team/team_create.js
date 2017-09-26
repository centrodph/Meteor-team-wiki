import React, { Component } from 'react';
import { createTeam } from '../../actions/team_actions';
import { connect } from 'react-redux';

class CreateTeam extends Component {
  submitHandler(event) {
    event.preventDefault();
    const { name, description } = this.refs;
    this.props.createTeam(name.value, description.value);
    this.refs.name.value = '';
    this.refs.description.value = '';
  }
  render() {
    return (
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
    );
  }
}
export default connect(null, { createTeam })(CreateTeam);
