import React , { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class SignUp extends Component {

  constructor(props){
      super(props);
      this.state = {error: null};
  }

  componentDidMount(){
    console.log("component mounted");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  submitHandler(event){
    event.preventDefault();
    const { email, password , name } = this.refs;
    console.log(email.value,password.value, name.value);
    Accounts.createUser({ email: email.value, password: password.value}, (err) => {
          if(err){
            this.setState({
              error: err.reason
            });
          } else {
            this.props.history.push('/');
          }
    });
    email.value =null;
    password.value =null;
  }

  render(){
    return (
      <div className="login-contener">
        Create Account
        {this.state.error}
        <form onSubmit={this.submitHandler.bind(this)}>
        <div className="form-input signup-input-email">
          <label>Name</label>
          <input type="text" ref="name" placeholder="Name" />
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
