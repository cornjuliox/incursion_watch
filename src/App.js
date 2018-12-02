import React, { Component } from 'react';
import IncursionCard from './incursionCard/incursionCard';
import axios from 'axios';
import chunk from 'lodash.chunk';

import { Row, Col } from 'reactstrap';

import loader from './fruits-watermelon.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

const DEAD_CENTER = {
  margin: 'auto',
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: 0,
  right: 0,
  height: 'auto',
  width: 'auto',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.incs = [];

    this.getWholeIncursions = this.getWholeIncursions.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  getWholeIncursions() {
    return axios
      .get('https://esi.evetech.net/latest/incursions/')
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(`error fetching incursions: ${err}`);
      });
  }

  componentDidMount() {
    // NOTE: I'm really not happy with this particular bit of code
    //       it seems like a shitty, hacky way to turn an asynchronous process
    //       synchronous. But, it works. 
    let rawIncs = [];
    this.getWholeIncursions()
      .then(data => {
        rawIncs = data;
      })
      .then(() => {
        this.incs = rawIncs.map(inc => {
          return (
            <Col xs="12" lg="4">
              <IncursionCard incursion={inc}/>
            </Col>
          )
        })
        this.incs = chunk(this.incs, 3)
        this.incs = this.incs.map(row => {
          return (
            <Row>
              {row}
            </Row>)
        })
      })
      .then(() => {
        this.setState({})
      })

  }

  render() {

    if (this.incs === undefined || this.incs.length === 0) {
      return (
        <div className="m-5 text-center">
          <img src={loader} alt=""/>
          <p>Please enjoy this watermelon while we fetch incursion data.</p>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <div>
            <p>
              This website is a tool designed to help EVE Online players locate
              and track Incursions within the game's universe.
            </p>
            <p>
              Incursions are EVE Online's version of 'raids'. End-game fleet-based
              PVE encounters which fleets of pilots work to drive back NPC
              pirate invasions across the game's universe.
            </p> 
            <p>

            </p> 
          </div>
          {this.incs}
        </div>
      )
    }

  }
}

export default App;
