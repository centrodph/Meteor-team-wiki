import React, { Component } from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  IndexRoute,
  browserHistory
} from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import Header from '../parts/header';
import Footer from '../parts/footer';

/**
 * display public page
 */
class Home extends Component {
  /**
   * construct basic estructure
   * @method constructor
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * Render
   * @method render
   */
  render() {
    return (
      <div>
        <Header currentpath={this.props.location.pathname} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
