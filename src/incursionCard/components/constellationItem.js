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
          <div>
              <a 
                className="text-center" 
                href={`https://evemaps.dotlan.net/map/${this.state.regionName}/${this.state.constellationName}`}
              >
                <h1>{this.state.constellationName}</h1>
              </a>
                <a href={`https://evemaps.dotlan.net/map/${this.state.regionName.split(' ').join('_')}`} className="text-center">
                  <h5>({this.state.regionName})</h5>
                </a>
          </div>
        )
      }

    }
}
