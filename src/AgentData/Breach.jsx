export const Breach = {
  type: 'Initator',
  name: 'Breach',
  description:
    'Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
  c: {
    name: 'Aftershock',
    description:
      'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
    cost: '100',
    uses: '1 Use',
    damage: '90',
    cooldown: '',
    other: '',
    effect: '',
  },
  q: {
    name: 'Flashpoint',
    description:
      'EQUIP a blinding charge. FIRE the charges to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
    cost: '200',
    uses: '2 Uses',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  e: {
    name: 'Fault Line',
    description:
      'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
    cost: 'Free',
    uses: '1 Use',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  x: {
    name: 'Rolling Thunder',
    description:
      'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
    cost: '7 Charges',
    uses: '',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
};
