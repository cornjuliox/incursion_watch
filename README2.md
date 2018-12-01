Incursion data is obtained from EVE's developer API at https://esi.evetech.net

More specifically it comes from `https://esi.evetech.net/latest/incursions`.

Sample Data:
```
[
  {
    "constellation_id": 20000295,
    "faction_id": 500019,
    "has_boss": false,
    "infested_solar_systems": [
      30002004,
      30002005,
      30002006,
      30002007,
      30002008,
      30002009
    ],
    "influence": 0,
    "staging_solar_system_id": 30002008,
    "state": "mobilizing",
    "type": "Incursion"
  },
  {
    "constellation_id": 20000699,
    "faction_id": 500019,
    "has_boss": true,
    "infested_solar_systems": [
      30004778,
      30004779,
      30004780,
      30004781,
      30004782,
      30004783
    ],
    "influence": 0.992,
    "staging_solar_system_id": 30004782,
    "state": "mobilizing",
    "type": "Incursion"
  },
  {
    "constellation_id": 20000194,
    "faction_id": 500019,
    "has_boss": false,
    "infested_solar_systems": [
      30001331,
      30001332,
      30001333,
      30001334,
      30001335,
      30001336
    ],
    "influence": 0,
    "staging_solar_system_id": 30001335,
    "state": "withdrawing",
    "type": "Incursion"
  },
  {
    "constellation_id": 20000607,
    "faction_id": 500019,
    "has_boss": true,
    "infested_solar_systems": [
      30004148,
      30004149,
      30004150,
      30004151,
      30004152,
      30004153,
      30004154
    ],
    "influence": 1,
    "staging_solar_system_id": 30004154,
    "state": "established",
    "type": "Incursion"
  }
]
```

I want to replace the constellation, solar system, and faction IDs with their
proper names so the objects end up looking something like this -
```
{
  "constellation_id": "Moghiz", // link to dotlan?
  "faction_id": 500019, // it's always Sansha's Nation I think. That might change.
  "has_boss": true,
  "infested_solar_systems": [
    {
      "name": "Jennim",
      "security_status": 0.8 // round to the nearest tenth
    },
    ...etc for each infested solar system.
  ],
  "influence": 1,
  "staging_solar_system_id": {
    "name": "Yenifi",
    "security_status": 0.6 // round to the nearest tenth!
  } 
  "state": "established",
  "type": "Incursion"
}
```

```
Incursion Data Acquisition Algorithm -
Pull data down from the MAIN ENDPOINT (https://esi.evetech.net/latest/incursions/)
For each incursion in that dataset:
  Obtain constellation name from the `constellations` endpoint
  Replace `constellation_id` in original object with constellation name
  Obtain faction name, for now it will always be `Sansha's Nation`
  Replace `faction_id` in original object with faction name

  For each infested solar system:
    Get solar system name from `solar systems` endpoint
    Get solar system security status from `solar systems` endpoint
    Replace solar system id in array with object containing solar system name and security status.

  Obtain name of staging solar system from `solar systems endpoint`
  Replace `staging_solar_system_id` with object containing solar system name and security status.

  Return newly updated incursion object.
``` 

REFERENCE:
constellations: https://esi.evetech.net/latest/universe/constellations/{constellation_id}
solar systems: https://esi.evetech.net/latest/universe/systems/{system_id}
