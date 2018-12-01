import axios from 'axios';

export default class ESIWrapper {

  getIncursions() {
    let local_incursions = {}
    // get incursions
    return Promise.all([
      axios
        .get('https://esi.evetech.net/latest/incursions/')
        .then(res => {
          local_incursions = res.data
        })
        .then(() = {
          local_incursions.forEach(inc => {
            axios
              .get(`https://esi.evetech.net/latest/universe/constellations/${inc.constellation_id}`)
              .then(res => {
                inc.constellation_id = res.data.name
              })
          })
        })
    ])
  }
}
