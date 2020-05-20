export const Brimstone = {
  type: 'Controller',
  name: 'Brimstone',
  description:
    "Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely makes him the unmatched boots-on-the-groud commander",
  cSkill: {
    name: 'Stim Beacon',
    description:
      'EQUIP stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.',
    cost: '100',
    uses: '2',
  },
  qSkill: {
    name: 'Incendiary',
    description:
      'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damage players within the zone.',
    cost: '300',
    uses: '1',
  },
  eSkill: {
    name: 'Sky Smoke',
    description:
      "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    cost: '100',
    uses: '3',
  },
  xSkill: {
    name: 'Orbital Strike',
    description:
      'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
    cost: '6 Charges',
    uses: '',
  },
};
