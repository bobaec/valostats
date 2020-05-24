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
    other: '2.2 seconds charge time',
  },
  q: {
    name: 'Flashpoint',
    description:
      'EQUIP a blinding charge. FIRE the charges to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
    damage: '',
    effect: 'FLASHES all in sight',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: '0.1 - 1.75 seconds',
    other: '0.5 second wind up',
  },
  e: {
    name: 'Fault Line',
    description:
      'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
    damage: '',
    effect: 'DAZES all from 10m - 50m',
    cost: 'Free',
    uses: '1 Use',

    cooldown: '',
    duration: '3 seconds',
    other: 'Daze Debuff - 85% slow, 80% reduced rate of fire, 50% reduced aim recovery. Gradually recovers over time',
  },
  x: {
    name: 'Rolling Thunder',
    description:
      'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
    cost: '7 Charges',
    damage: '',
    effect: 'DAZES all up to 38m',
    uses: '',
    cooldown: '',
    other: 'Daze Debuff - 85% slow, 80% reduced rate of fire, 50% reduced aim recovery. Gradually recovers over time',
  },
};
