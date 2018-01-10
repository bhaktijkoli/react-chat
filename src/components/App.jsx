import React, { Component } from 'react';

import NameModal from './NameModal.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    };
  }
  render() {
    return(
      <div className="section-start">
        <div className="panel panel-primary">
          <div className="panel-heading"><h4>React Chat<small>&nbsp;&nbsp;&nbsp;{this.state.name}</small></h4></div>
        </div>
        <div className="input-group chat-form">
          <input id="msg" type="text" className="form-control" name="msg" placeholder="Enter your message."/>
          <span className="input-group-btn">
              <button className="btn btn-success" type="button">Send</button>
            </span>
          </div>
          <NameModal id="nameModal" update={this.updateName.bind(this)}/>
        </div>
      )
    }
    updateName(name) {
      this.setState({name:name})
    }
  }
  export default App;
