import React, { Component } from 'react';
import axios from 'axios';

export default class ConstellationComponent extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {}
  }

  componentDidMount() {
    axios
      .get(`https://esi.evetech.net/latest/universe/constellations/${this.props.constellationId}`)
      .then(res => {
        this.setState({
          constellationName: res.data.name,
          regionId: res.data.region_id
        });
        return axios.get(`https://esi.evetech.net/latest/universe/regions/${res.data.region_id}`)
      })
      .then(res => {
        this.setState({
          regionName: res.data.name
        })
      })
      .then(() => {
      })
  }

  render() {
    if(this.state.regionName === undefined) {
      return (
        <div>
          LOADING....
        </div>
      )
    } else {
        return (
          <div className="text-center">
              <a 
                className="" 
                title="The constellation where the incursion is happening."
                href={`https://evemaps.dotlan.net/map/${this.state.regionName}/${this.state.constellationName}`}
              >
                <h3 className="">{this.state.constellationName}</h3>
              </a>
              <a 
                className=""
                title="The region that the constellation belongs to."
                href={`https://evemaps.dotlan.net/map/${this.state.regionName.split(' ').join('_')}`} 
              >
                <h4>({this.state.regionName})</h4>
              </a>
          </div>
        )
      }

    }
}
