import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import Notice from '../parts/notice';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  submitHandler(event) {
    event.preventDefault();
    const { email, password, username } = this.refs;
    Accounts.createUser(
      {
        username: username.value,
        email: email.value,
        password: password.value
      },
      err => {
        if (err) {
          this.setState({
            error: err.reason
          });
        } else {
          this.props.history.push('/');
        }
      }
    );
    username.value = null;
    email.value = null;
    password.value = null;
  }

  render() {
    return (
      <div className="login-contener">
        <h3>Create Account</h3>
        <Notice error={this.state.error} />
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

export default SignUp;
