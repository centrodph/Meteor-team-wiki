import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="header-contener">
        <div className="header-app-name">Meteor Wiki</div>
        <div className="header-app-profile">Profile</div>
      </div>
    );
  }
}

export default Header;
