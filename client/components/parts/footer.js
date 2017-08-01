import React, { Component } from 'react';
import UserStatus from '../business/userstatus';

class Footer extends UserStatus {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div>Wiki</div>
      </div>
    );
  }
}

export default Footer;
