import React, { Component } from 'react';

class Content extends Component {
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
          <input id="msg" type="text" className="form-control" name="msg" placeholder="Enter your message."/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">Send</button>
          </span>
        </div>
      )
    }
  }
  changeName() {
    window.changeName();
  }
}
export default Content;
