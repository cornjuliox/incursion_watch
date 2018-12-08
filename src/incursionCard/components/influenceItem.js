import React, { Component } from 'react';
import {
  Progress,
} from 'reactstrap';

export default class InfluenceItem extends Component {

  render() {
    let influenceValue = Math.round(this.props.influenceValue) * 100;
    let barColor = '';
    if (influenceValue === 0) {
      barColor = 'success';
    } else if (influenceValue === 100) {
      barColor = 'danger';
    } else {
      barColor = 'warning';
    }
    return (
      <div 
        className="text-center"
        title="
          The level of influence the incursion has on the constellation. 
          This affects the severity of system-wide incursion penalties.
          Lower influence rating == lower penalties."
      >
          <div>Influence @ {influenceValue}%</div>
          <Progress value={influenceValue} color={barColor}></Progress>
      </div>
    )
  }

}
