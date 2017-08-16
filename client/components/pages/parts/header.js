import React, { Component } from 'react';
import { NavLink, activeClassName } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">
            MeteorWiki
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default createContainer(props => {
  return { myuser: Meteor.users.find({}).fetch() };
}, Header);
