import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Redirect from '../parts/redirect';
import Header from '../parts/header';
import MiniChat from '../parts/minichat';

class Dashboard extends Redirect{
  render (){
    return (
      <div>
        <Header />
        <div className="layout">
          <div className="sidebar">
            <h3>Sidebar</h3>
            <p>link</p>
          </div>
          <div className="content">
            <h3>Content Page</h3>
            <p>page</p>
          </div>
          <MiniChat />
        </div>
        <div className="footer">
          <div>Wiki</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
