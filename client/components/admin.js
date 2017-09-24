import React, { Component } from 'react';

class Administration extends Component {
  render() {
    return (
      <div className="administration">
        {this.props.children}
      </div>
    );
  }
}
export default Administration;
