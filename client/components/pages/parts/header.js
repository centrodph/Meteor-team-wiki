import React, { Component } from 'react';
import { NavLink, Link, activeClassName } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userstatus: Meteor.userId() ? true : false,
      links: [
        {
          to: '/',
          text: 'Login',
          name: 'login',
          active: 'active',
          private: false
        },
        {
          to: '/signup',
          text: 'Register',
          name: 'register',
          active: '',
          private: false
        },
        {
          to: '/dashboard',
          text: 'Panel',
          name: 'panel',
          active: '',
          private: true
        },
        {
          to: '/dashboard/myprofile',
          text: 'Profile',
          name: 'profile',
          active: '',
          private: true
        }
      ]
    };
  }

  checkUser() {
    return Meteor.userId() ? true : false;
  }
  /**
   * Executed when a nav is clicked
   * @method btnClicked
   * @param  {[string]}   link [string of the link]
   */
  btnClicked(linkclicked) {
    const links = this.state.links.map(link => {
      link.active = ''; //clear
      if (link.name == linkclicked.name) link.active = 'active';
      return link;
    });
    this.setState({ links });
  }
  /**
   * Render
   * @method render
   */
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            MeteorWiki
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.state.links
              .filter(link => link.private == this.state.userstatus)
              .map(link => {
                return (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className={link.active}
                      onClick={this.btnClicked.bind(this, link)}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default createContainer(props => {
  return { myuser: Meteor.users.find({}).fetch() };
}, Header);
