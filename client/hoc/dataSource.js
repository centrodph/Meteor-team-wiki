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
export default function(WrappedComponent, actioncreator, ...params) {
  class DataSource extends Component {
    getParamRoute() {
      let objParam = {};
      params.forEach(p => {
        objParam[p] = this.props.match.params[p];
      });
      return objParam;
    }
    componentWillMount() {
      this.props.dispatch(actioncreator(this.getParamRoute()));
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect()(DataSource);
}
