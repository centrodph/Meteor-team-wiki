import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} METEORWIKI
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
