import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent, fetchMethod) {
  class DataSource extends Component {
    componentWillMount() {
      console.log('DataSource call ');
      fetchMethod();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return DataSource;
}
