import React, { Component } from 'react';
import axios from 'axios';


export default class SolarSystemItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`https://esi.evetech.net/latest/universe/systems/${this.props.solarSystemId}`)
      .then(res => {
        this.setState({
          stagingSolarSystem: res.data.name,
          securityStatus: res.data.security_status});
      })
  }

  render() {
    let colorText = '';

    // NOTE: this is just to match the way sec status displayed in-game
    let realSecurityStatus = Math.round(this.state.securityStatus * 10) / 10;
    if (realSecurityStatus === 0) {
      console.log(`null sec system detected: ${this.state.stagingSolarSystem}`)
      realSecurityStatus = '0.0'
    }
    if (realSecurityStatus >= 0.5) {
      console.log(`high sec system detected: ${this.state.stagingSolarSystem}`)
      colorText = 'text-success';
    }
    else if (realSecurityStatus > 0.0 && realSecurityStatus <= 0.4) {
      console.log(`low sec system detected: ${this.state.stagingSolarSystem}`)
      colorText = 'text-warning';
    }
    else if (realSecurityStatus <= 0.0) {
      console.log(`high sec system detected: ${this.state.stagingSolarSystem}`)
      colorText = 'text-danger'
    }

    return (
      <div 
        className="my-2"
        title={`${this.props.helpText}`}
      >
        <p className="float-left">{this.props.titleText}</p>
        <a 
          className="float-right" 
          href={`https://evemaps.dotlan.net/system/${this.state.stagingSolarSystem}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={colorText}>{this.state.stagingSolarSystem} ({realSecurityStatus})</p>
        </a> 
      </div>
    )
  }
}
