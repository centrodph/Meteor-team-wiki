import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Notice from '../notice';
import formAdmin from '../../../imports/forms/teamAdmin';
import _ from 'lodash';
import validators from '../../../imports/validators';

class TeamAdmin extends Component {
  constructor(props) {
    super(props);
  }
  submitHandler(values) {
    console.log(event);
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
          <form onSubmit={handleSubmit(this.submitHandler)}>
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

function validate(values) {
  const errors = {};
  const v = formAdmin.getValidators();
  console.log(v);
  _.forEach(values, function(value, key) {
    _.forEach(v, function(vvalue, vkey) {
      if (key == vkey) {
        vvalue.forEach(validator => {
          const r = validators[validator.type](value, validator.param);
          if (r) {
            errors[key] = r;
          }
        });
      }
    });
  });
  return errors;
}

function mapStateToProps(state) {
  const { name, description } = state.currentTeam;
  return {
    team: state.currentTeam,
    initialValues: { name, description }
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'teamadmin',
    validate,
    fields: formAdmin.getArray(),
    enableReinitialize: true
  })(TeamAdmin)
);
