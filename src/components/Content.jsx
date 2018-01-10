import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:3000/');

class Content extends Component {
  constructor(props)
  {
    super(props);
    this.state = {messages:[]}
    this.listenToEvents();
  }
  render() {
    if(this.props.name == "") {
      return(
        <center>
          <h3>Enter your name to begin the chat.</h3>
          <button className="btn btn-info" onClick={this.changeName}>Enter name</button>
        </center>
      )
    }
    else {
      return(
        <div className="input-group chat-form">
          <input ref="message" type="text" className="form-control" name="msg" placeholder="Enter your message."/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button" onClick={this.sendMessage.bind(this)}>Send</button>
          </span>
        </div>
      )
    }
  }
  listenToEvents() {
    socket.on('chat', (data) => {
      this.setState({
        messages: this.state.messages.push(data),
      })
    })
  }
  sendMessage() {
    socket.emit('chat',{
      user: this.props.name,
      message: this.refs.message.value,
    });
  }
  changeName() {
    window.changeName();
  }
}
export default Content;
