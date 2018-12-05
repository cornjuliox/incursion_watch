import React, { Component } from 'react';
import {
  Alert,
} from 'reactstrap';



export default class MobilizingItem extends Component {
  constructor(props) {
    super(props);

    this.INCURSIONSTATES = {
      'mobilizing': 
        <Alert 
          color="warning" 
          className="text-center" 
          id="mobilizationStatus"
        >
          MOBILIZING
        </Alert>,
      'established': 
        <Alert 
          color="success" 
          className="text-center" 
          id="mobilizationStatus"
        >
          ESTABLISHED
        </Alert>,
      'withdrawing': 
        <Alert 
          color="danger" 
          className="text-center" 
          id="mobilizationStatus"
        >
          WITHDRAWING
        </Alert>
    }

  }

  render() {
    return (
      <div>
          {
            this.INCURSIONSTATES[this.props.incursionState]
          }
      </div>
    )
  }
}
