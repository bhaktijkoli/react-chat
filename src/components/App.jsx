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
        <h1>{this.state.name}</h1>
        <NameModal id="nameModal" update={this.updateName.bind(this)}/>
      </div>
    )
  }
  updateName(name) {
    this.setState({name:name})
  }
}
export default App;
