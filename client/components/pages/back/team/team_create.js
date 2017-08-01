import React, { Component } from 'react';
import { TeamCollection } from '../../../../../imports/collections/team';

class CreateTeam extends Component {
  constructor(props) {
    super(props);
  }
  submitHandler(event) {
    event.preventDefault();
    const { name, description } = this.refs;
    Meteor.call('teamcollection.create', name.value, description.value);
    this.refs.name.value = '';
    this.refs.description.value = '';
  }
  render() {
    return (
      <div className="create-team">
        <h3>Create Team</h3>
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
    );
  }
}

export default CreateTeam;
