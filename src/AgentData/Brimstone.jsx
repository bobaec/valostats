export const Brimstone = {
  type: 'Controller',
  name: 'Brimstone',
  description:
    "Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely makes him the unmatched boots-on-the-groud commander",
  c: {
    name: 'Stim Beacon',
    description:
      'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RAPIDFIRE.',
    damage: '',
    effect: '10% Faster: Rate of Fire / Reload Speed / Aim Recovery / Equip Speed',
    cost: '100',
    uses: '2 Uses',
    cooldown: '',
    duration: '12s',
    other: 'Leaving the field maintains the buff for 4s',
  },
  q: {
    name: 'Incendiary',
    description:
      'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damage players within the zone.',
    damage: '60 DPS',
    effect: '',
    cost: '300',
    uses: '1 Use',
    cooldown: '',
    duration: '8s',
    other: '2.5s to kill a fully armored target',
  },
  e: {
    name: 'Sky Smoke',
    description:
      "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    damage: '',
    effect: 'BLOCKS line of sight',
    cost: '100',
    uses: '3 Uses',
    cooldown: '',
    duration: '14.25s',
    other: '0.75s to bloom',
  },
  x: {
    name: 'Orbital Strike',
    description:
      'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
    damage: '120 DPS',
    effect: '',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: '4s',
    other: '2s wind up',
  },
};
