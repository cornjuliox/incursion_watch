import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import loader from '../fruits-watermelon.gif';

export default class LoadingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} centered={true}>
          <ModalHeader className="mx-auto">
            <img src={loader} alt="" className=""/>
          </ModalHeader>
          <ModalBody className="text-center">
            <p>Please enjoy this watermelon while we fetch incursion data.</p>
            <p>(If this screen doesn't go away, ESI might be down.)</p>
          </ModalBody>
        </Modal>
      </div>

    )
  }
}
