import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import SolarSystemItem from './solarSystemItem';

const SCROLLABLE_LISTGROUPITEM = {
  maxHeight: '200px',
  overflow: 'scroll'
}

export default class InfestedSystemsItem extends Component {
  render() {
    console.log(this.props.infestedSystems);
    let systems = this.props.infestedSystems.map(item => {
      return <SolarSystemItem solarSystemId={item} />
    })
    return (
      <div>
        <ListGroupItem style={SCROLLABLE_LISTGROUPITEM}>
          <p>Infested Solar Systems:</p>
          <ListGroup>
            {systems}
          </ListGroup>
        </ListGroupItem>
      </div>
    )
  }
}