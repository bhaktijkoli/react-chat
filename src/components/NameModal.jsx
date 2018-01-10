import React, { Component } from 'react';

class NameModal extends Component {
  componentDidMount() {
    $(this.refs.modal).modal('show');
  }
  render() {
    return(
      <div className="modal fade" id="nameModal" ref="modal" role="dialog" data-backdrop="false" data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Welcome to React Chat</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Enter your name:</label>
                  <input ref="name" type="text" className="form-control" id="name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" style={{width:'150px'}} onClick={this.updateName.bind(this)}>GO!</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" style={{width:'150px'}}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  updateName() {
    this.props.update(this.refs.name.value);
    $(this.refs.modal).modal('hide');
  }
}
export default NameModal;
