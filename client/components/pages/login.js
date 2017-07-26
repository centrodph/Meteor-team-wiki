import React , { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
// import { createContainer } from 'meteor/react-meteor-data';

class LoginForm extends Component {

  constructor(props){
      super(props);
      this.state = {
        error: null
      };
  }

  componentDidMount(){
    console.log("component mounted");
    //this.view = Blaze.render(,this.refs.login);
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  submitHandler(event){
    event.preventDefault();
    const {email, password } = this.refs;
    console.log(email.value,password.value);
    Meteor.loginWithPassword(email.value, password.value, (err) => {
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
        Login content
        {this.state.error}
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="form-input login-input-username">
            <label>Email</label>
            <input type="email" ref="email" placeholder="email" />
          </div>
          <div className="form-input login-input-username">
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
