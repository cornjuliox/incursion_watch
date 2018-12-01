import React, { Component } from 'react';
import {
  ListGroupItem,
  Alert
} from 'reactstrap';

export default class MobilizingItem extends Component {
  render() {
    const INCURSIONSTATES = {
      'mobilizing': <Alert color="warning" className="text-center">MOBILIZING</Alert>,
      'established': <Alert color="success" className="text-center">ESTABLISHED</Alert>,
      'withdrawing': <Alert color="danger" className="text-center">WITHDRAWING</Alert>
    }

    return (
      <div>
        <ListGroupItem>
          {
            INCURSIONSTATES[this.props.incursionState]
          }
        </ListGroupItem>
      </div>
    )

  }
}
