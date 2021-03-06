import React, { Component } from 'react';

import NameModal from './NameModal.jsx'
import Content from './Content.jsx'

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
        <Content name={this.state.name}/>
        <NameModal id="nameModal" update={this.updateName.bind(this)}/>
      </div>
    )
  }
  updateName(name) {
    this.setState({name:name})
  }
}
export default App;
