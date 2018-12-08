import React, { Component } from 'react';
import IncursionCard from './incursionCard/incursionCard';
import axios from 'axios';
import chunk from 'lodash.chunk';

import { Row, Col } from 'reactstrap';

import loader from './fruits-watermelon.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        this.setState({
          random: 'foobar'
        })
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
        <div>
          <div class="container text-center">
            <h1>Incursion Watch</h1>
            <hr/>
          </div>
          <div className="text-center">
            <div>
              <p>
                Incursions in EVE Online are EVE encounters in which 
                fleets of pilots work to drive back NPC pirate invasions in 
                across the game's universe. They represent high-end PVE content
                and are equivalent to 'raids' in other MMOs.
              </p> 
              <p>
                This website is a tool designed to help EVE Online players locate
                and track the status of Incursions within the game's universe.
                Refresh the page to get the latest data.
              </p>
              <p>
                It pulls data straight from the <a href="https://esi.evetech.net/">EVE Online API</a>,
                and as such, certain things aren't readily available (like who owns sovereign space, when applicable).
                For cases like those, I link systems, regions, and constellations to their respective DOTLAN pages
                for more info.
              </p>
              <p>
                Hover your mouse over each element for a description of what it is.
              </p>
            </div>
            {this.incs}
          </div>
          <div>
            <footer className="footer m-2">
              <div className="container text-center">
                <hr/>
                <span className="text-muted d-block">
                  This site was built using ReactJS + bootstrap 4 
                </span>
                <span className="text-muted d-block">
                  (c) 2018 <a href="https://github.com/cornjuliox" className="">Enrico Tuvera Jr</a>
                </span>
                <span className="text-muted d-block">
                  EVE Online & the API I used here are property of CCP Games
                </span>
              </div>
            </footer>
          </div>
        </div>
      )
    }

  }
}

export default App;
