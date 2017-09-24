import React, { Component } from 'react';
import Notice from './notice';
import { connect } from 'react-redux';
import { doRegister } from '../actions/register_actions';

class Register extends Component {
  submitHandler(event) {
    event.preventDefault();
    const { email, password, username } = this.refs;
    this.props.doRegister(email.value, password.value, username.value);
  }
  renderError() {
    if (this.props.register.error) {
      return <Notice msgtype="error" msg={this.props.register.error.reason} />;
    }
  }
  render() {
    return (
      <div className="login-contener">
        <h3>Create Account</h3>
        {this.renderError()}
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-input signup-input-username">
            <label>Name</label>
            <input type="text" ref="username" placeholder="Username" />
          </div>
          <div className="form-input signup-input-email">
            <label>Email</label>
            <input type="email" ref="email" placeholder="email" />
          </div>
          <div className="form-input signup-input-password">
            <label>Password</label>
            <input type="password" ref="password" placeholder="password" />
          </div>
          <div className="form-input signup-input-submit">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state, ownState) {
  return { register: state.register };
}
export default connect(mapStateToProps, { doRegister })(Register);
