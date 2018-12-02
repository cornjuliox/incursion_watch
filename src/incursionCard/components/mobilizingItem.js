import React, { Component } from 'react';
import {
  Alert
} from 'reactstrap';
const INCURSIONSTATES = {
  'mobilizing': 
    <Alert color="warning" className="text-center">MOBILIZING</Alert>,
  'established': 
    <Alert color="success" className="text-center">ESTABLISHED</Alert>,
  'withdrawing': 
    <Alert color="danger" className="text-center">WITHDRAWING</Alert>
}

export default class MobilizingItem extends Component {
  render() {

    return (
      <div>
          {
            INCURSIONSTATES[this.props.incursionState]
          }
      </div>
    )

  }
}
