import React, { Component } from 'react';

class Notice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.error)
      return (
        <div className="card-panel red darken-4">
          <span className="white-text">
            {this.props.error}
          </span>
        </div>
      );
    return null;
  }
}

export default Notice;
