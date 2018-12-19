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

    let realSecurityStatus = Math.round(this.state.securityStatus * 10) / 10;

    // NOTE: these checks are just to match the way sec status displayed in-game
    //       otherwise we'd have stuff like '0', '1', and '-1' showing up.
    // --- BEGIN ---
    if (realSecurityStatus === 0) {
      realSecurityStatus = '0.0';
    }

    if (realSecurityStatus === 1) {
      realSecurityStatus = '1.0';
    }

    if (realSecurityStatus === -1) {
      realSecurityStatus = '-1.0';
    }
    // --- END ---

    if (realSecurityStatus >= 0.5) {
      colorText = 'text-success';
    }
    else if (realSecurityStatus > 0.0 && realSecurityStatus <= 0.4) {
      colorText = 'text-warning';
    }
    else if (realSecurityStatus <= 0.0) {
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
