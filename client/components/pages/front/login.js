import React, { Component } from 'react';
import Notice from '../parts/notice';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidMount() {
    console.debug('component mounted LoginForm');
  }

  componentWillUnmount() {
    console.log('component will unmount LoginForm');
  }

  submitHandler(event) {
    event.preventDefault();
    const { email, password } = this.refs;
    Meteor.loginWithPassword(email.value, password.value, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
        return;
      }
      email.value = null;
      password.value = null;
      this.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <div className="login-contener">
        <div className="login-box">
          <h3>Login</h3>
          <Notice error={this.state.error} />
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

export default LoginForm;