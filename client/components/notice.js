import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  getClasses() {
    switch (this.props.msgtype) {
      case 'error':
        return 'row card-panel red darken-1 white-text';
        break;
      default:
        return 'row card-panel green darken-1  white-text';
    }
  }
  handlerCloseNotice() {
    this.setState({ show: false });
  }
  render() {
    if (!this.state.show) return null;
    return (
      <div className={this.getClasses()}>
        <div className="col s10">
          {this.props.msg}
        </div>
        <div className="col s2">
          <Link to="#" onClick={this.handlerCloseNotice.bind(this)}>
            <i className="material-icons right  white-text">close</i>
          </Link>
        </div>
      </div>
    );
  }
}
export default Notice;
