import React, { Component } from 'react';
import {
  ListGroupItem,
  ListGroup
} from 'reactstrap';

import SolarSystemItem from './solarSystemItem';

const SCROLLABLE_LISTGROUPITEM = {
  maxHeight: '450px',
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
