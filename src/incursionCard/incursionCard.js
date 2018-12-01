import React, { Component } from 'react';
import { 
  Card, 
  CardText, 
  CardBody, 
  ListGroup, 
} from 'reactstrap';

import ConstellationItem from './components/constellationItem';
import SolarSystemItem from './components/solarSystemItem';
import InfluenceItem from './components/influenceItem';
import InfestedSystemsItem from './components/infestedSystemsItem';
import MobilizingItem from './components/mobilizingItem';


class IncursionCard extends Component {
  render() {
    return (
      <div>
        <Card className='my-2'>
          <CardBody>
            <CardText>
              <ListGroup>
                <ConstellationItem 
                  constellationId={this.props.incursion.constellation_id}>
                </ConstellationItem>
                <MobilizingItem
                  incursionState={this.props.incursion.state}>
                </MobilizingItem>
                <InfluenceItem 
                  influenceValue={this.props.incursion.influence}>
                </InfluenceItem>
                <SolarSystemItem 
                  solarSystemId={this.props.incursion.staging_solar_system_id}
                  titleText="Staging System: ">
                </SolarSystemItem>
                <InfestedSystemsItem 
                  infestedSystems={this.props.incursion.infested_solar_systems}>
                </InfestedSystemsItem>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default IncursionCard;
