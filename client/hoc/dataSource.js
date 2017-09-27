import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * HOC to dispatch an action when componentWillMount
 * can be used for load external data.
 * @method
 * @param  {React.Component} WrappedComponent
 * @param  {action creator } actioncreator
 * @return {React.Component}
 */
export default function(WrappedComponent, actioncreator) {
  class DataSource extends Component {
    componentWillMount() {
      this.props.dispatch(actioncreator());
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect()(DataSource);
}
