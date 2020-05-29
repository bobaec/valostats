export const Breach = {
  type: 'Initator',
  name: 'Breach',
  description:
    'Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
  c: {
    name: 'Aftershock',
    description:
      'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
    damage: '60 - 175',
    effect: '',
    cost: '100',
    uses: '1 Use',
    cooldown: '',
    duration: '',
    other: 'Increases damage the longer you charge (0s - 2.2s)',
  },
  q: {
    name: 'Flashpoint',
    description:
      'EQUIP a FLASHING charge. FIRE the charges to set a fast-acting burst through the wall. The charge detonates to FLASH all players looking at it.',
    damage: '',
    effect: 'FLASHES all in sight',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: '0.1s - 1.75s',
    other: 'FLASHES after 0.5s',
  },
  e: {
    name: 'Fault Line',
    description:
      'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, DAZING all players in its zone and in a line up to the zone.',
    damage: '',
    effect: 'DAZES all in range from 10m - 50m',
    cost: 'Free',
    uses: '1 Use',
    cooldown: '',
    duration: '3s',
    other: 'DAZE - 85% slow, 80% reduced rate of fire, 50% reduced aim recovery (gradually recovers over time)',
  },
  x: {
    name: 'Rolling Thunder',
    description:
      'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake DAZES and knocks up anyone caught in it.',
    cost: '7 Charges',
    damage: '',
    effect: 'DAZES all in area up to 38m',
    uses: '',
    cooldown: '',
    duration: '6s',
    other: 'DAZE - 85% slow, 80% reduced rate of fire, 50% reduced aim recovery (gradually recovers over time)',
  },
};
