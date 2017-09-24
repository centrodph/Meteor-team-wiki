import React, { Component } from 'react';
import Notice from './notice';
import { connect } from 'react-redux';
import { doLogin } from '../actions/login_actions';

class LoginForm extends Component {
  submitHandler(event) {
    event.preventDefault();
    const { email, password } = this.refs;
    this.props.doLogin(email.value, password.value);
  }
  renderError() {
    if (this.props.login.error) {
      return <Notice msgtype="error" msg={this.props.login.error.reason} />;
    }
  }
  render() {
    return (
      <div className="login-contener">
        <div className="login-box">
          <h3>Login</h3>
          {this.renderError()}
          <form onSubmit={this.submitHandler.bind(this)}>
            <div className="form-input login-input-email">
              <label>Email</label>
              <input type="email" ref="email" placeholder="Email" />
            </div>
            <div className="form-input login-input-password">
              <label>Password</label>
              <input type="password" ref="password" placeholder="Password" />
            </div>
            <div className="form-input login-input-submit">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownState) {
  return { login: state.login };
}
export default connect(mapStateToProps, { doLogin })(LoginForm);
