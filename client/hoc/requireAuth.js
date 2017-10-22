import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.auth) {
        this.props.history.push('/unauthorized');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { auth: state.autenticated };
  }
  return connect(mapStateToProps)(RequireAuth);
}
