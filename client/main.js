import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import MiniChat from './components/minichat';

class App extends Component{
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

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.appcontent'));
});
