import React, { Component } from 'react';
import IncursionCard from './incursionCard/incursionCard';
import axios from 'axios';
import chunk from 'lodash.chunk';

import { Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.incs = [];

    this.getWholeIncursions = this.getWholeIncursions.bind(this);
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

  render() {
    // NOTE: I'm really not happy with this particular bit of code
    //       it seems like a shitty, hacky way to turn an asynchronous process
    //       synchronous.
    let rawIncs = [];
    this.getWholeIncursions()
      .then(data => {
        rawIncs = data;
      })
      .then(() => {
        this.incs = rawIncs.map(inc => {
          return (
            <Col xs="1" lg="4">
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

    return (
      <div>
        {this.incs}
      </div>
    )
  }
}

export default App;
