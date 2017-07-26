import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { MiniChatCollection } from '../../../imports/collections/minichat';


class MiniChat extends Component{

  submitHandler(event){
    event.preventDefault();
    Meteor.call('minichatcollection.insert', this.refs.msg.value);
    this.refs.msg.value ='';
  }

  render(){
    return(
      <div className="chat">
        <h5>chat</h5>
        {this.props.msgs.map(msg=><div key={msg._id}>{msg.content}</div>)}
        <form onSubmit={this.submitHandler.bind(this)}>
          <input ref="msg" placeholder="..." />
          <button>Send</button>
        </form>

      </div>
    );
  }

}

export default createContainer((props)=>{
  Meteor.subscribe('minichatcollection');
  return { msgs : MiniChatCollection.find({}).fetch()}
}, MiniChat);
