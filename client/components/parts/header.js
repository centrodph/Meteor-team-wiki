import React, { Component } from 'react';
import UserStatus from '../business/userstatus';

class Header extends UserStatus  {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="header-contener">
        <div className="header-app-name">Meteor Wiki</div>
        <div className="header-app-profile">{this.getUserName()}</div>
      </div>
    );
  }
}

export default Header;
