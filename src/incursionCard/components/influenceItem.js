import React, { Component } from 'react';
import {
  Progress,
  ListGroupItem
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
      <div className="text-center">
        <ListGroupItem>
          <div className="text-center">Influence @ {influenceValue}%</div>
          <Progress value={influenceValue} color={barColor}></Progress>
        </ListGroupItem>
      </div>
    )
  }

}
