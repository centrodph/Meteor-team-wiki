import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Notice from '../notice';
import formAdmin from '../../../imports/forms/teamAdmin';
import { formValidate } from '../../../imports/forms/formhelper';
import { adminTeam } from '../../actions/team_actions';

class TeamAdmin extends Component {
  submitHandler(values) {
    console.log(this.props.team);
    this.props.adminTeam(this.props.team._id, values);
  }
  renderFields(field) {
    return (
      <div key={field.name}>
        <Field {...field} />
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, fields } = this.props;
    if (this.props.team.error) {
      return <Notice msgtype="error" msg={this.props.team.error} />;
    }
    return (
      <div className="team-admin">
        <div className="team-admin-box">
          <h3>Team Admin</h3>
          <form onSubmit={handleSubmit(this.submitHandler.bind(this))}>
            {fields.map(this.renderFields.bind(this))}
            <div className="form-input login-input-submit">
              <button>Edit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, description } = state.currentTeam;
  return {
    team: state.currentTeam,
    initialValues: { name, description }
  };
}

export default connect(mapStateToProps, { adminTeam })(
  reduxForm({
    form: 'teamadmin',
    validate: formValidate.bind(formAdmin),
    fields: formAdmin.getArray(),
    enableReinitialize: true
  })(TeamAdmin)
);
