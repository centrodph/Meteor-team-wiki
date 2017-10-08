import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Notice from '../notice';
import formAdmin from '../../../imports/forms/teamAdmin';

console.log(formAdmin);

class TeamAdmin extends Component {
  constructor(props) {
    super(props);
  }
  submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
  }
  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error &&
              <span>
                {error}
              </span>) ||
              (warning &&
                <span>
                  {warning}
                </span>))}
        </div>
      </div>
    );
  }
  renderFields(field) {
    console.log(field);
    return (
      <div key={field.name}>
        <Field
          name={field.name}
          component={this.renderField}
          type={field.type}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, fields } = this.props;

    console.log(this.props.team);
    if (!this.props.team) return <div>Loading</div>;
    if (this.props.team.error) {
      return <Notice msgtype="error" msg={this.props.team.error} />;
    }
    return (
      <div className="team-admin">
        <div className="team-admin-box">
          <h3>Team Admin</h3>
          <form onSubmit={this.submitHandler.bind(this)}>
            {fields.map(this.renderFields.bind(this))}
            <div className="form-input login-input-submit">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

function mapStateToProps(state) {
  return {
    team: state.currentTeam,
    initialValues: state.currentTeam
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
