import React , { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


class LoginForm extends Component {
  componentDidMount(){
    console.log("component mounted");
    //this.view = Blaze.render(,this.refs.login);
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
  render(){
    return (
      <div className="login-contener">
        Login content
        <div ref="login"></div>
      </div>
    );
  }
}

export default LoginForm;
