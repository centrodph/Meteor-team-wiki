import React , { Component } from 'react';
import UserStatus from '../business/userstatus';

class LoginForm extends UserStatus {

  constructor(props){
      super(props);
      this.state = {
        error: null
      };
  }

  componentDidMount(){
    console.log("component mounted LoginForm");
    //this.view = Blaze.render(,this.refs.login);
  }

  componentWillUnmount(){
    console.log("component will unmount LoginForm");
  }

  submitHandler(event){
    event.preventDefault();
    const {email, password } = this.refs;
    Meteor.loginWithPassword(email.value, password.value, (err) => {
      if(err){
            this.setState({
              error: err.reason
            });
            return;
      }
      email.value =null;
      password.value =null;
      this.props.history.push('/dashboard');
    });
  }

  render(){
    return (
      <div className="login-contener">
        Login content
        {this.state.error}
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-input login-input-email">
            <label>Email</label>
            <input type="email" ref="email" placeholder="email" />
          </div>
          <div className="form-input login-input-password">
            <label>Password</label>
            <input type="password" ref="password" placeholder="password" />
          </div>
          <div className="form-input login-input-submit">
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
